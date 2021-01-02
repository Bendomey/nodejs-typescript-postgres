import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/health", (_, res) => res.sendStatus(200));

export default app;
