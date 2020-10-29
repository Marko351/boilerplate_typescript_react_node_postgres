import dotenv from 'dotenv';

dotenv.config({ path: `../.env.${process.env.APP_ENV}` });

import express, { Application } from 'express';
import { middlewares } from './config/middlewares';

const app: Application = express();

middlewares(app);
