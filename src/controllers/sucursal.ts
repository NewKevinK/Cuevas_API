import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";

const getSucursal = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM sucursal");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetSucursal');
    }
}

const getSucursalID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM sucursal WHERE idSucursal = ?", params.idSucursal);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetSucursalID');
    }
}

const addSucursal = async ({body}: Request, res: Response) => {
    try {
        
        const conn = await getConnection();
        const result = await conn.query("INSERT INTO sucursal SET ?", body);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorAddSucursal');
    }
}



export {getSucursal, getSucursalID, addSucursal};
