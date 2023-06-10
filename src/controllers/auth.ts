import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";
import { Usuario } from "../interface/Usuario";
import { methods as methodsVU } from "../helpers/validateUsuario";
import { methods as methodsVC } from "../helpers/validateCarro";
import { methods as handle} from "../utils/handleBcrypt";
import { SPI_usuario } from "../database/procedures/usuario";
import { generateToken } from "../utils/jwt";

const addCliente = async ({body}: Request, res: Response) => {
    try {
        const newUsuario:Usuario = body;
        const existPhone = await methodsVU.existPhone(newUsuario.telefono);
        if(!existPhone) {
            const passwordHashed = await handle.encrypt(newUsuario.contrasena);
            newUsuario.contrasena = passwordHashed;

            const connection = await getConnection();
            const result = await connection.query(SPI_usuario, newUsuario);
            
            const wait = await methodsVC.createCarroMain(newUsuario.telefono);
            res.json(result);
        }else{
            res.json({ message: "User already registered" });
            return res.status(400);
        }

    }catch (error) {
        handleHttp(res, 'ErrorAddUsuario');
    }
};

const loginAuth = async ({body}: Request, res: Response) => {
    try {
        console.log(body.nombreUsuario);
        const nu: string = body.nombreUsuario;
        if(nu == undefined){
            const existPhone = await methodsVU.existPhone(body.telefono);
            if(existPhone){
                const encryp = await methodsVU.findOnePhone(body.telefono);
                const checkPassword = await handle.comparePass(body.contrasena, encryp);

                if(checkPassword){
                    const phone: string = body.telefono;
                    const accessToken = await generateToken(phone);
                    const idUser = await methodsVU.getIdP(body.telefono);
                    res.header('authorization', accessToken).json({message: "authenticated user", token: accessToken, id: idUser});
                }else{
                    res.json({ message: "Wrong password" });
                    return res.status(401);
                }
            }else{
                res.json({ message: "No find user" });
                return res.status(404);
            }

        }else{
            console.log("entro a nombreUsuarioooo");
            const existEmail = await methodsVU.existUser(body.nombreUsuario);
            if(existEmail){
                const encryp = await methodsVU.findOneUser(body.nombreUsuario);
                const checkPassword = await handle.comparePass(body.contrasena, encryp);

                if(checkPassword){
                    const user: string = body.usuario;
                    const accessToken = await generateToken(user);
                    const userAll: any = await methodsVU.getIdU(body.nombreUsuario);
                    
                    res.header('authorization', accessToken).json({message: "authenticated user", token: accessToken, id: userAll.id, tipoUsuario: userAll.tipoUsuario});
                }else{
                    res.json({ message: "Wrong password" });
                    return res.status(401);
                }
            }else{
                res.json({ message: "No find user" });
                return res.status(404);
            }

        }
    }catch (error) {
        handleHttp(res, 'ErrorLoginAuth');
    }
};

export { addCliente, loginAuth };