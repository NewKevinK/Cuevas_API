import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";
import { Usuario } from "../interface/Usuario";
import { methods as methodsVU } from "../helpers/validateUsuario";
import { methods as handle} from "../utils/handleBcrypt";
import { SPI_usuario } from "../database/procedures/usuario";

const getUsuario = async (req: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorGetUsuario');
    }
}

const getUsuarioID = async ({params}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorGetUsuarioID');
    }
}

const addUsuario = async ({body}: Request, res: Response) => {
    try {
        const newUsuario:Usuario = body;
        const existEmail = await methodsVU.existUser(newUsuario.nombreUsuario);
        if(!existEmail) {
            const passwordHashed = await handle.encrypt(newUsuario.contrasena);
            newUsuario.contrasena = passwordHashed;

            const connection = await getConnection();
            const result = await connection.query(SPI_usuario, newUsuario);
            
            res.json(result);
            

        }else{
            res.json({ message: "User already registered" });
            return res.status(400);
            
        }

    }catch (error) {
        handleHttp(res, 'ErrorAddUsuario');
    }
}

const updateUsuario = async ({params, body}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorUpdateUsuario');
    }
}

const deleteUsuario = async ({params}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorDeleteUsuario');
    }
}

export {getUsuario, getUsuarioID, addUsuario, updateUsuario, deleteUsuario};