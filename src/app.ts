import express, { Response, Request } from "express";

// Create Express server
const app = express();

// Express configuration
app.set("port", process.env.PORT || 3010);

/**
 * Primary app routes.
 */
app.get("/", function (req: Request, res: Response) {
  return res.json({ success: true })
});

export default app;