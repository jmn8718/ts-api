import { Application, Request, Response } from 'express'

export function registerRoutes(app: Application) {
  app.get("/", function (req: Request, res: Response) {
    return res.json({ success: true })
  });
}