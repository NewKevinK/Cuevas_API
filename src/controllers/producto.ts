import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";
import { Post } from "../interface/Post";
import { Producto } from "../interface/Producto";
import { SPI_producto } from "../database/procedures/producto";

    const getProducto = async (req: Request, res: Response) => {    
        try {

        }catch (error) {
            handleHttp(res, 'ErrorGetProducto');
        }
    }

    const getProductoID = async (req: Request, res: Response) => {
        try {

        }catch (error) {
            handleHttp(res, 'ErrorGetProductoID');
        }
    }

    const addProducto = async ( {body}: Request, res: Response) => {
        try {
            const newPost:Producto = body;
            //console.log(newPost);
            //const {nombre, descripcion, precio, stock} = req.body;
            //const newPro:string = req.body;
            //const result = await getConnection().query(query);
            const conn = await getConnection();
            await conn.query(SPI_producto, [newPost]);

            //console.log(body);
            res.send(body);
        }catch (error) {
            handleHttp(res, 'ErrorAddProducto');
        }
    };

    const updateProducto = async (req: Request, res: Response) => {
        try {
            
        }catch (error) {
            handleHttp(res, 'ErrorAddProducto');
        }
    }

    const deleteProducto = async (req: Request, res: Response) => {
        try {
            
        }catch (error) {
            handleHttp(res, 'ErrorAddProducto');
        }
    }

    export {getProducto, getProductoID, addProducto, updateProducto, deleteProducto};
    

