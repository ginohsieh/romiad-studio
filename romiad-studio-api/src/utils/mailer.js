import nodemailer from 'nodemailer';
import smtpCnf from '@/configs/smtp.json';
import logger from '@/utils/logger';

export default class Mailer {
  constructor({
    host = smtpCnf.host,
    port = smtpCnf.port,
    secure = smtpCnf.secure,
    auth = smtpCnf.auth,
    logger = logger,
  } = {}) {
    this.transporter = this._createTransporter({
      host,
      port,
      secure,
      auth 
    });
  }

  _createTransporter({
    host,
    port,
    secure,
    auth,
    ...rest
  } = {}) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth,
      ...rest
    });
  }

  sendMail({
    from,
    to,
    subject,
    text,
    html,
  } = {}) {
    try {
      return this.transporter.sendMail({
        from,
        to,
        subject,
        text,
        html,
      });
    } catch (e) {
      this.logger.error(e);
    }
  }
}
