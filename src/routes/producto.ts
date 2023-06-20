import { Router, Response, Request } from "express";
import { validateToken } from "../utils/jwt";
import { addProducto, deleteProducto, getImagenProductoCategoria, getImagenProductoID, getProducto, getProductoID, updateProducto } from "../controllers/producto";

const router = Router();

router.get("/",validateToken, getProducto);

router.get("/:idProducto", validateToken, getProductoID);

router.post("/", validateToken, addProducto);

router.patch("/:idProducto",validateToken, updateProducto);

router.delete("/:idProducto",validateToken, deleteProducto);

router.get("/imagenProductoID/", validateToken, getImagenProductoID);

router.get("/imagenProductoCategoria/", validateToken, getImagenProductoCategoria)


export {router};