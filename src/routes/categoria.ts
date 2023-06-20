import { Router } from 'express';
import { addCategoria, getCategoriaID, getCategoriaProducto, getCategorias } from '../controllers/categoria';
import { validateToken } from '../utils/jwt';

const router = Router();
//Nuevo routerr
//const routerr = Router();

router.get('/',validateToken, getCategorias);

router.get('/:idCategoria',validateToken, getCategoriaID );

router.post('/',validateToken, addCategoria);

router.get('/producto/:idCategoria',validateToken, getCategoriaProducto);

//Nuevo export default
//export default routerr;
export { router };


