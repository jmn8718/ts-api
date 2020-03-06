import { Application, Request, Response } from 'express'
import morgan from 'morgan';

import { APP_CONFIG } from '../config';

export function applyMiddlewareBeforeRoutes(app: Application) {
  app.use(morgan(APP_CONFIG.MORGAN_LEVEL));
}