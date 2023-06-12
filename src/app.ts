import express from "express";
import cors from "cors";
import morgan from "morgan";

//Nuevas importaciones
import categoriaR from "./routes/categoria";

import "dotenv/config";
import {router} from "./routes";
const PORT = process.env.PORT || 9099;

const app = express();
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//Nuevas rutas
app.use('/api/categoria', categoriaR);
app.use(router);



app.listen(PORT, () => console.log("Server listening to", PORT) );

