import e, { Router } from 'express';

import { addDomicilio, deleteDomicilio, getDomicilio, getDomicilioID, updateDomicilio } from '../controllers/domicilio';
import { validateToken } from '../utils/jwt';

const router = Router();

router.get("/",validateToken, getDomicilio);

router.get("/:idDomicilio",validateToken, getDomicilioID);

router.post("/",validateToken, addDomicilio);

router.patch("/:idDomicilio",validateToken, updateDomicilio);

router.delete("/:idDomicilio",validateToken, deleteDomicilio);

export {router};