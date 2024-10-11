import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from './routes';
import corsCnf from '@/configs/cors.json';

const app = express();

app.use(cors({
  origin: corsCnf.ORIGIN
}));
app.use(bodyParser.json());
app.use(router);

export default app;
