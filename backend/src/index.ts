import dotenv from 'dotenv'

dotenv.config({ path: `${__dirname}/../.env.${process.env.APP_ENV}` })

import express, { Application } from 'express'
import { middlewaresConfig } from './app/config/middlewaresConfig'
import { routesConfig } from './app/config/routesConfig'

const app: Application = express()

middlewaresConfig(app)

routesConfig(app)

app.listen(5000, () => {
  console.log('App is upp and running on port 5000')
})
