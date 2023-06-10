import { Router} from "express";
import { addUsuario, deleteUsuario, getUsuario, getUsuarioID, updateUsuario } from "../controllers/usuario";

const router = Router();

router.get("/", getUsuario);

router.get("/:idUsuario", getUsuarioID);

router.post("/", addUsuario);

router.patch("/:idUsuario", updateUsuario);

router.delete("/:idUsuario", deleteUsuario);


export {router};