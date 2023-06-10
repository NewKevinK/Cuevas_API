import express from "express";
import cors from "cors";
import morgan from "morgan";

import "dotenv/config";
import {router} from "./routes";
const PORT = process.env.PORT || 9099;

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(router);

app.listen(PORT, () => console.log("Server listening to", PORT) );

