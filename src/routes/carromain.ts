import { Router } from 'express';
import { addCarroProducto, getCarro, getCarroID, getCarroProductoID, quitCarroProducto } from '../controllers/carromain';


const router = Router();

router.get("/", getCarro);

router.get("/:idCarro", getCarroID);

router.post("/addCar", addCarroProducto);
 
router.post("/quitCar", quitCarroProducto);

router.get("/carroProducto/:idCarro", getCarroProductoID);

export {router};