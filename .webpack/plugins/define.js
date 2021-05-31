import { DefinePlugin } from 'webpack'
import env from 'dotenv'

const dotenv = env.config({ path: '.env' })

export default (environment) =>
  new DefinePlugin({
    'process.env': {
      API_URL: JSON.stringify(dotenv.parsed ? dotenv.parsed.API_URL : process.env.API_URL),
      ENVIRONMENT: JSON.stringify(dotenv.parsed ? dotenv.parsed.ENVIRONMENT : process.env.ENVIRONMENT),
    },
  })
