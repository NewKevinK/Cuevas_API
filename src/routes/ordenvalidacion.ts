import { Router } from 'express';
import { validateToken } from '../utils/jwt';
import { getStatusEntrega, getStatusValidacion, surtirPedido } from '../controllers/ordenvalidacion';


const router = Router();

router.get("/sValidacion",validateToken, getStatusValidacion);

router.get("/sEntrega",validateToken, getStatusEntrega);

router.patch("/surtirPedido",validateToken, surtirPedido);


export {router};