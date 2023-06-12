import { getConnection } from "../database/dbConfig";
import { handleHttp } from "../utils/error.handle";
import e, { Request, Response } from "express";



const getMetodoPago = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM metodopago");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetMetodoPago');
    }
}

const getMetodoPagoID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM metodopago WHERE idUsuario = ?", params.idMetodoPago);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetMetodoPagoID');
    }
}

const addMetodoPago = async ({body}: Request, res: Response) => {
    try {
        
        const conn = await getConnection();
        const result = await conn.query("INSERT INTO metodopago SET ?", body);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorAddMetodoPago');
    }
}

const updateMetodoPago = async ({params, body}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("UPDATE metodopago SET ? WHERE idTarjeta = ?", [body, params.idMetodoPago]);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorUpdateMetodoPago');
    }
}

const deleteMetodoPago = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("DELETE FROM metodopago WHERE idTarjeta = ?", params.idMetodoPago);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorDeleteMetodoPago');
    }
}

export {getMetodoPago, getMetodoPagoID, addMetodoPago, updateMetodoPago, deleteMetodoPago};