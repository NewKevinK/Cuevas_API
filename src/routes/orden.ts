import { Router } from 'express';
import { addOrden, getOrden, getOrdenID, getOrdenProducto, updateOrden } from '../controllers/orden';
import { validateToken } from '../utils/jwt';

const router = Router();

router.post("/",validateToken, addOrden);
router.get("/",validateToken, getOrden);
router.get("/:idCarro",validateToken, getOrdenID);
router.get("/ordenProducto/:idOrden",validateToken, getOrdenProducto);
router.patch("/:idOrden",validateToken, updateOrden);

export {router};