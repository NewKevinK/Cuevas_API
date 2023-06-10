import { Router } from "express";
import { addCliente, loginAuth } from "../controllers/auth";

const router = Router();

router.post("/login", loginAuth);

router.post("/", addCliente);


export {router};