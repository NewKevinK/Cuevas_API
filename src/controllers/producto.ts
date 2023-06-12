import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";
import { Post } from "../interface/Post";
import { Producto } from "../interface/Producto";
import { SPI_producto } from "../database/procedures/producto";

    const getProducto = async (req: Request, res: Response) => {    
        try {
            const conn = await getConnection();
            const result = await conn.query("SELECT * FROM producto");
            res.send(result);
        }catch (error) {
            handleHttp(res, 'ErrorGetProducto');
        }
    }

    const getProductoID = async ({params}: Request, res: Response) => {
        try {
            const conn = await getConnection();
            const result = await conn.query("SELECT * FROM producto WHERE idProducto = ?", params.idProducto);
            res.send(result);
        }catch (error) {
            handleHttp(res, 'ErrorGetProductoID');
        }
    }

    const addProducto = async ( {body}: Request, res: Response) => {
        try {
            const newPost:Producto = body;
            
            //const newPro:string = req.body;
            const conn = await getConnection();
            await conn.query(SPI_producto, [newPost]);

            //console.log(body);
            res.send(body);
        }catch (error) {
            handleHttp(res, 'ErrorAddProducto');
        }
    };

    const updateProducto = async ({params, body}: Request, res: Response) => {
        try {
            const conn = await getConnection();
            const result = await conn.query("UPDATE producto SET ? WHERE idProducto = ?", [body, params.idProducto]);
            res.json(result);
        }catch (error) {
            handleHttp(res, 'ErrorAddProducto');
        }
    }

    const deleteProducto = async ({params}: Request, res: Response) => {
        try {
            const conn = await getConnection();
            const result = await conn.query("DELETE FROM producto WHERE idProducto = ?", params.idProducto);
            res.json(result);
        }catch (error) {
            handleHttp(res, 'ErrorAddProducto');
        }
    }

    export {getProducto, getProductoID, addProducto, updateProducto, deleteProducto};
    

