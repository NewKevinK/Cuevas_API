import { Router } from 'express';
import { addCarroProducto, getCarro, getCarroID, getCarroProductoID, quitCarroProducto } from '../controllers/carromain';
import { validateToken } from '../utils/jwt';


const router = Router();

router.get("/",validateToken, getCarro);

router.get("/:idCarro",validateToken, getCarroID);

router.post("/addCar",validateToken, addCarroProducto);
 
router.post("/quitCar",validateToken, quitCarroProducto);

router.get("/carroProducto/:idCarro",validateToken, getCarroProductoID);

export {router};