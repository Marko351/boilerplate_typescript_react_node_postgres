import { Application } from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors'

export const middlewaresConfig = (app: Application): void => {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(
    cors({
      origin: process.env.CLIENT_URL,
      credentials: true,
    }),
  )
  app.use(cookieParser())
  app.use(morgan('dev'))
}
