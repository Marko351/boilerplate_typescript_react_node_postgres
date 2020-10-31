import dotenv from 'dotenv';

dotenv.config({ path: `../.env.${process.env.APP_ENV}` });

import express, { Application } from 'express';
import { middlewaresConfig } from './app/config/middlewaresConfig';

const app: Application = express();

app.listen(5000, () => {
  console.log('App is upp and running on port 5000');
});

middlewaresConfig(app);
