import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { getConnection } from '../database/dbConfig';

const getCategorias = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM categoria");
        res.send(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetCategoria');
    }
}

const getCategoriaID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM categoria WHERE idCategoria = ?", params.idCategoria);
        res.send(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetCategoriaID');
    }
}

const addCategoria = async ( {body}: Request, res: Response) => {
    try {
        
        const conn = await getConnection();
        const result = await conn.query("INSERT INTO categoria SET ?", body);
        res.send(result);
    }catch (error) {
        handleHttp(res, 'ErrorAddCategoria');
    }   
}

const getCategoriaProducto = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM producto WHERE idCategoria = ?");
        res.send(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetCategoriaProducto');
    }
}

export { getCategorias, getCategoriaID, addCategoria, getCategoriaProducto };