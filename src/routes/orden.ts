import { Router } from 'express';
import { addOrden, getOrden, getOrdenID, getOrdenProducto } from '../controllers/orden';

const router = Router();

router.post("/", addOrden);
router.get("/", getOrden);
router.get("/:idCarro", getOrdenID);
router.get("/ordenProducto/:idOrden", getOrdenProducto);

export {router};