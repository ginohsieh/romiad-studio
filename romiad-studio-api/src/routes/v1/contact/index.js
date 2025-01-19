import path from 'path';
import Joi from 'joi';
import { Router } from 'express';
import pug from 'pug';
import Mailer from '@/utils/mailer';
import logger from '@/utils/logger';
import smtpCnf from '@/configs/smtp.json';

const contactRouter = Router();

const valueMapping = {
  film_type: {
    commercial: '商業廣告',
    corporate: '企業形象',
    event: '活動紀錄',
    city_marketing: '城市推廣',
    crowdfunding: '群眾募資',
    interview: '訪談',
    other: '其他',
  },
  end_date_preference: {
    Y: '有',
    N: '沒有',
    ASAP: '沒有，但希望儘快',
  },
  budget: {
    5: '5萬',
    8: '8~15萬',
    20: '20~50萬',
    50: '50~100萬',
    100: '>100萬',
  },
  source: {
    website: '官方網站',
    facebook: 'Facebook',
    instagram: 'Instagram',
    youtube: 'YouTube',
    friend: '朋友推薦',
    industry: '業內介紹',
    other: '其他',
  },
}

const schemas = {
  '/': {
    POST: Joi.object({
      name: Joi.string().max(256).required(),
      email: Joi.string().email().required(),
      url: Joi.string().uri().allow(null, ''),
      film_type: Joi.array().items(Joi.string().valid(
       'commercial',
       'corporate',
       'event',
       'city_marketing',
        'crowdfunding',
        'interview',
        'other'
      )).required(),
      description: Joi.string().max(1024).allow(null, ''),
      end_date: Joi.string().isoDate().required(),
      budget: Joi.string().valid("5", "8", "20", "50", "100").required(),
      source: Joi.array().items(Joi.string().valid(
        'website',
        'facebook',
        'instagram',
        'youtube',
        'friend',
        'industry',
        'other',
      )),
    }),
  },
};

function schemaValidator(req, res, next) {
  const schema = schemas?.[req.path]?.[req.method];
  if (!schema) {
    next();
  }
  const validateResult = schema.validate(req.body);
  if (validateResult.error) {
    return res.status(400).send();
  }
  next();
}

contactRouter.use(schemaValidator);
contactRouter.get("/", (req, res) => {
  res.send("Hello World!");
});
contactRouter.post("/", async (req, res) => {
  const mailer = new Mailer();
  const compiledFunction = pug.compileFile(path.join(__dirname, 'mail.pug'));
  const info = await mailer.sendMail({
    from: `"${req.body.name}" <${req.body.email}>`,
    to: smtpCnf.receiver,
    subject: `Inquiry from ${req.body.name}`,
    text: `Inquiry from ${req.body.name}`,
    html: compiledFunction({
      name: req.body.name,
      email: req.body.email,
      url: req.body.url,
      film_type: req.body.film_type.map((value) => valueMapping.film_type[value]).join(', '),
      description: req.body.description,
      start_date: req.body.start_date,
      end_date_preference: valueMapping.end_date_preference[req.body.end_date_preference],
      budget: valueMapping.budget[req.body.budget],
      source: req.body.source.map((value) => valueMapping.source[value]).join(', '),
    }),
  });
  if (info) {
    logger.info(`Message sent: ${info.messageId}`);
    return res.status(200).send();
  }
});

export default contactRouter;
