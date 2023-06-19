import { Router } from 'express';
import { addMetodoPago, deleteMetodoPago, getMetodoPago, getMetodoPagoID, updateMetodoPago } from '../controllers/metodopago';
import { validateToken } from '../utils/jwt';

const router = Router();

router.get('/',validateToken, getMetodoPago );

router.get('/:idMetodoPago',validateToken, getMetodoPagoID );

router.post('/',validateToken, addMetodoPago);

router.patch('/:idMetodoPago',validateToken, updateMetodoPago);

router.delete('/:idMetodoPago',validateToken, deleteMetodoPago);

export {router};
