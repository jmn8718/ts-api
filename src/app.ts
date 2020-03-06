import express, { Response, Request } from "express";
import { CONFIG } from './config';

// Create Express server
const app = express();

// Express configuration
app.set("port", CONFIG.PORT);

/**
 * Primary app routes.
 */
app.get("/", function (req: Request, res: Response) {
  return res.json({ success: true })
});

export default app;