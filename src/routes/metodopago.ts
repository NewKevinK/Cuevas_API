import { Router } from 'express';
import { addMetodoPago, deleteMetodoPago, getMetodoPago, getMetodoPagoID, updateMetodoPago } from '../controllers/metodopago';

const router = Router();

router.get('/', getMetodoPago );

router.get('/:idMetodoPago', getMetodoPagoID );

router.post('/', addMetodoPago);

router.patch('/:idMetodoPago', updateMetodoPago);

router.delete('/:idMetodoPago', deleteMetodoPago);

export {router};
