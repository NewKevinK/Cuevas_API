import  { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";
import { Orden } from "../interface/Orden";
import { methods as methodsVC } from "../helpers/validateCarro";

export const addOrden = async ( {body}: Request, res: Response) => {
    try {
        const newOrden:Orden = body;
        //const date = await methodsVC.getDate();
        newOrden.fecha = await methodsVC.getDate();
        newOrden.total = await methodsVC.subCar(newOrden.idCarro);

        const conn = await getConnection();
        var result = await conn.query("INSERT INTO orden SET ?", newOrden);
        var data = JSON.parse(JSON.stringify(result));

        console.log(data.insertId);
        const ordenProductos = await methodsVC.ordenProductos(newOrden.idCarro, data.insertId);
        const reset = await methodsVC.resetCar(newOrden.idCarro);

        
        res.json({ message: "orden added" });
    }catch (error) {
        handleHttp(res, 'ErrorAddOrden');
    }
}

export const getOrden = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM orden");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetOrden');
    }
}

export const getOrdenID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM orden WHERE idCarro = ?", params.idCarro);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetOrdenID');
    }
}

export const getOrdenProducto = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM ordenproducto WHERE idOrden = ?", params.idOrden);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetOrdenProducto');
    }
}

export const updateOrden = async ({params, body}: Request, res: Response) => {
    try{
        const conn = await getConnection();
        const result = await conn.query("UPDATE orden SET ? WHERE idOrden = ?", [body, params.idOrden]);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorUpdateOrden');
    }
}

export const methods = {addOrden, getOrden, getOrdenID, getOrdenProducto, updateOrden};