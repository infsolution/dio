import "reflect-metadata";
import * as express from "express";
import * as cors from "cors";

import { router } from "./routes";

import "./database";

const app = express();

app.use(cors());

app.use(express.json());
app.use(router)

app.listen(5000, () => {
    console.log('Server on port: 5000')
})
