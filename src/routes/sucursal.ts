import { Router } from "express";
import { addSucursal, getSucursal, getSucursalID } from "../controllers/sucursal";


const router = Router();

router.get("/", getSucursal);

router.get("/:idSucursal", getSucursalID);

router.post("/", addSucursal);


export {router};