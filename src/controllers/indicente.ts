import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { getConnection } from '../database/dbConfig';


const getIncidente = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM reporte");
        res.send(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetIncidente');
    }

}

const getIncidenteID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM reporte WHERE idReporte = ?", params.idReporte);
        res.send(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetIncidenteID');
    }
}

const addIncidente = async ( {body}: Request, res: Response) => {
    try {
        
        const conn = await getConnection();
        await conn.query("INSERT INTO reporte SET ?", body);
        res.send("Add incidente");
    }catch (error) {
        handleHttp(res, 'ErrorAddIncidente');
    }
}


export {getIncidente, getIncidenteID, addIncidente};    