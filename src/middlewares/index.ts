import { Application } from 'express'
import morgan from 'morgan';
import helmet from 'helmet';
import compression from "compression";
import bodyParser from "body-parser";
import errorHandler from "errorhandler";

import { APP_CONFIG, CONFIG } from '../config';

export function applyMiddlewareBeforeRoutes(app: Application) {
  app.use(morgan(APP_CONFIG.MORGAN_LEVEL));
  app.use(helmet());
  app.use(compression());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
}

export function applyMiddlewareAfterRoutes(app: Application) {
  if (CONFIG.ENV === 'development') {
    console.log('Register error handler middleware')
    app.use(errorHandler());
  }
}