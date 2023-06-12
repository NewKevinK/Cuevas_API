import { Router } from 'express';
import { addCategoria, getCategoriaID, getCategorias } from '../controllers/categoria';

const router = Router();
//Nuevo routerr
const routerr = Router();

routerr.get('/', getCategorias);

routerr.get('/:idCategoria', getCategoriaID );

routerr.post('/', addCategoria);

//Nuevo export default
export default routerr;
export { router };


