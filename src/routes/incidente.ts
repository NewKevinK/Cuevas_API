import { Router, Response, Request } from "express";
import { validateToken } from "../utils/jwt";
import { addIncidente, getIncidente, getIncidenteID } from "../controllers/indicente";

const router = Router();

router.get("/", validateToken, getIncidente)

router.get("/:idReporte", validateToken, getIncidenteID);

router.post("/", validateToken, addIncidente);



export {router};
