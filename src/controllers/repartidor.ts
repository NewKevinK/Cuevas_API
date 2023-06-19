import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";

const getPedidoAsignado = async ({params}: Request, res: Response) => {
    try{
        const conn = await getConnection();
        var result = await conn.query("SELECT * FROM ordenrepartidor WHERE idUsuario = ?", params.idUsuario);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetPedidoAsignado');
    }
}

const confirmarEntrega = async ({params}: Request, res: Response) => {
    try{
        const conn = await getConnection();
        var result = await conn.query("UPDATE orden SET estado = 'Entregado' WHERE idOrden = ?", params.idOrden);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorConfirmarEntrega');
    }
}

const confirmarNoEntrega = async ({params}: Request, res: Response) => {
    try{
        const conn = await getConnection();
        var result = await conn.query("UPDATE orden SET estado = 'No entregado' WHERE idOrden = ?", params.idOrden);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorConfirmarNoEntrega');
    }
}

export {getPedidoAsignado, confirmarEntrega, confirmarNoEntrega};