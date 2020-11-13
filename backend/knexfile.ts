import dotenv from 'dotenv'

dotenv.config({ path: `./.env.${process.env.APP_ENV}` })

import { knexConfig } from './src/app/config/knexConfig'

module.exports = {
  ...knexConfig,
}
