import { Router } from 'express';
import { addCategoria, getCategoriaID, getCategorias } from '../controllers/categoria';

const router = Router();

router.get('/', getCategorias);

router.get('/:idCategoria', getCategoriaID );

router.post('/', addCategoria);

export { router };

