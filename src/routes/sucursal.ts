import { Router } from "express";
import { addSucursal, deleteSucursal, getSucursal, getSucursalID, updateSucursal } from "../controllers/sucursal";


const router = Router();

router.get("/", getSucursal);

router.get("/:idSucursal", getSucursalID);

router.post("/", addSucursal);

router.patch("/:idSucursal", updateSucursal);

router.delete("/:idSucursal", deleteSucursal);


export {router};