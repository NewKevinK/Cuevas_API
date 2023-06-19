import { Router} from "express";
import { addUsuario, deleteUsuario, getUsuario, getUsuarioID, updateUsuario } from "../controllers/usuario";
import { validateToken } from "../utils/jwt";

const router = Router();

router.get("/",validateToken, getUsuario);

router.get("/:idUsuario",validateToken, getUsuarioID);

router.post("/",validateToken, addUsuario);

router.patch("/:idUsuario",validateToken, updateUsuario);

router.delete("/:idUsuario", validateToken,deleteUsuario);


export {router};