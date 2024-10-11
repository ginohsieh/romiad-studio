import { Router } from 'express';
import contactRouter from './contact';

const v1Router = Router();

v1Router.use("/contact", contactRouter);

export default v1Router;
