import { Router } from "express";
import { addSucursal, getSucursal, getSucursalID } from "../controllers/sucursal";
import { validateToken } from "../utils/jwt";


const router = Router();

router.get("/",validateToken, getSucursal);

router.get("/:idSucursal",validateToken, getSucursalID);

router.post("/",validateToken, addSucursal);


export {router};