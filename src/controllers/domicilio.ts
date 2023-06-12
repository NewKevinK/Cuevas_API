import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";


const getDomicilio = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM domicilio");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetDomicilio');
    }
}

const getDomicilioID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM domicilio WHERE idUsuario = ?", params.idDomicilio);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetDomicilioID');
    }
}

const addDomicilio = async ( {body}: Request, res: Response) => {
    try{
        
        const conn = await getConnection();
        await conn.query("INSERT INTO domicilio SET ?", body);
        res.json(body);
    }catch(error){
        handleHttp(res, 'ErrorAddDomicilio');
    }
}

const updateDomicilio = async ({params, body}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("UPDATE domicilio SET ? WHERE idDomicilio = ?", [body, params.idDomicilio]);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorUpdateDomicilio');
    }
}

const deleteDomicilio = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("DELETE FROM domicilio WHERE idDomicilio = ?", params.idDomicilio);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorDeleteDomicilio');
    }
}

export {getDomicilio, getDomicilioID, addDomicilio, updateDomicilio, deleteDomicilio};
