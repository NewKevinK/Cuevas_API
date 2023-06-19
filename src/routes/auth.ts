import { Router } from "express";
import { addCliente, loginAuth } from "../controllers/auth";
import { validateToken } from "../utils/jwt";

const router = Router();

router.post("/login",validateToken, loginAuth);

router.post("/",validateToken, addCliente);


export {router};