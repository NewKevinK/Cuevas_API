import { Router } from 'express';
import { getCategoriaID, getCategorias } from '../controllers/categoria';

const router = Router();

router.get('/', getCategorias);

router.get('/:idCategoria', getCategoriaID );

