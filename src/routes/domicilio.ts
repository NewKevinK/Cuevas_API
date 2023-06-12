import e, { Router } from 'express';

import { addDomicilio, deleteDomicilio, getDomicilio, getDomicilioID, updateDomicilio } from '../controllers/domicilio';

const router = Router();

router.get("/", getDomicilio);

router.get("/:idDomicilio", getDomicilioID);

router.post("/", addDomicilio);

router.patch("/:idDomicilio", updateDomicilio);

router.delete("/:idDomicilio", deleteDomicilio);

export {router};