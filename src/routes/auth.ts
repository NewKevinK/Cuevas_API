import { Router } from "express";
import { addCliente, loginAuth } from "../controllers/auth";
import { validateToken } from "../utils/jwt";

const router = Router();

router.post("/login", loginAuth);

router.post("/", addCliente);


export {router};