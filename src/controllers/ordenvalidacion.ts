import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";

const getStatusValidacion = async (req: Request, res: Response) => {
    try{
        const conn = await getConnection();
        var result = await conn.query("SELECT * FROM orden WHERE estado = 'Proceso de validacion'");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetStatusValidacion');
    }
}

const getStatusEntrega = async (req: Request, res: Response) => {
    try{
        const conn = await getConnection();
        var result = await conn.query("SELECT * FROM orden WHERE estado = 'Proceso de entrega'");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetStatusEntrega');
    }
}

const surtirPedido = async ({body}: Request, res: Response) => {
    try{
        const ordenrepartidor = {
            idOrden: body.idOrden,
            idUsuario: body.idUsuario
        }
        const conn = await getConnection();
        const result = await conn.query("UPDATE orden SET estado = 'Proceso de entrega' WHERE idOrden = ?",body.idOrden );
        const ress = await conn.query("INSERT INTO ordenrepartidor SET ? ",ordenrepartidor );
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorSurtirPedido');
    }
}

export {getStatusValidacion, getStatusEntrega, surtirPedido};