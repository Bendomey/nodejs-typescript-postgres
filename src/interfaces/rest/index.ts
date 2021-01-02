import * as express from "express";
import { Request, Response } from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import { Routes } from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/health", (_, res) => res.sendStatus(200));

// register express routes from defined application routes
Routes.forEach((route) => {
  (app as any)[route.method](
    route.route,
    (req: Request, res: Response, next: Function) => {
      const result = new (route.controller as any)()[route.action](
        req,
        res,
        next
      );
      if (result instanceof Promise) {
        result.then((result) =>
          result !== null && result !== undefined ? res.send(result) : undefined
        );
      } else if (result !== null && result !== undefined) {
        res.json(result);
      }
    }
  );
});

export default app;
