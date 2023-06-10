import { Router, Response, Request } from "express";
import { addProducto, deleteProducto, getProducto, getProductoID, updateProducto } from "../controllers/producto";

const router = Router();

router.get("/", getProducto);

router.get("/:idProducto", getProductoID);

router.post("/", addProducto);

router.patch("/:idProducto", updateProducto);

router.delete("/:idProducto", deleteProducto);


export {router};