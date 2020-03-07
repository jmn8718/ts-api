import pino from 'pino';

import { APP_CONFIG } from './config'
export const logger = pino({
  level: APP_CONFIG.LOGGER_LEVEL,
  base: null // https://getpino.io/#/docs/api?id=base-object
}); 