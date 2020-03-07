import express, { Application } from "express";
import { CONFIG } from './config';

import { applyMiddlewareBeforeRoutes, applyMiddlewareAfterRoutes } from './middlewares';
import { registerRoutes } from './routes';

const app: Application = express();

// Express configuration
app.set("port", CONFIG.PORT);

applyMiddlewareBeforeRoutes(app);
registerRoutes(app);
applyMiddlewareAfterRoutes(app);

export default app;