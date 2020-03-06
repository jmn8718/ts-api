import express, { Application, Response, Request } from "express";
import { CONFIG } from './config';

import { applyMiddlewareBeforeRoutes } from './middlewares';
import { registerRoutes } from './routes';

const app: Application = express();

// Express configuration
app.set("port", CONFIG.PORT);

applyMiddlewareBeforeRoutes(app);
registerRoutes(app);

export default app;