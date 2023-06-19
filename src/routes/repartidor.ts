import { Router } from 'express';
import { validateToken } from '../utils/jwt';
import { confirmarEntrega, getPedidoAsignado } from '../controllers/repartidor';

const router = Router();

router.get("/",validateToken, getPedidoAsignado);

router.patch("/confirmarEntrega/:idOrden", validateToken, confirmarEntrega);

router.patch("/confirmarNoEntrega/:idOrden", validateToken, confirmarEntrega);

export {router};