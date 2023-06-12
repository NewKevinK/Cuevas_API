import { Request, Response } from 'express';
import { handleHttp } from '../utils/error.handle';
import { getConnection } from '../database/dbConfig';
import { methods as methodsVC } from '../helpers/validateCarro';

const getCarro = async (req: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM carromain");
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetCarro');
    }
};

const getCarroID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT * FROM carromain WHERE idCarro = ?", params.idCarro);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetCarroID');
    }
}

const addCarroProducto = async ( {body}: Request, res: Response) => {
    try {
        let connection = await getConnection();
        let result = await connection.query("SELECT idProducto FROM carroproducto WHERE idProducto = ? AND idCarro = ?" ,[body.idProducto, body.idCarro]);
        var resultJSON = JSON.parse(JSON.stringify(result));
        console.log("entro11");
        if(resultJSON.length > 0){
            console.log("entroExiste");
            let res = await connection.query("UPDATE carroproducto SET cantidad = cantidad + ? WHERE idProducto = ? AND idCarro = ?", [body.cantidad, body.idProducto, body.idCarro]); 
        }else{
            console.log("entroNoExiste");
            let res = await connection.query("INSERT INTO carroproducto SET ?", body); 
        }
        
        res.json({ message: "carroProducto added" });
        const refresh = await methodsVC.refreshCarroMain(body.idCarro);
        console.log("refresh");
    }catch (error) {
        handleHttp(res, 'ErrorAddCarroProducto');
    }
}

const quitCarroProducto = async ( {body}: Request, res: Response) => {
    try {
        let connection = await getConnection();
        let result = await connection.query(`SELECT cantidad FROM carroproducto WHERE idProducto = ${body.idProducto} AND idCarro = ${body.idCarro} `);
        var data=JSON.parse(JSON.stringify(result));
        let number = body.cantidad - data[0].cantidad;
        if(number < 0){
            
            const connection = await getConnection();
            await connection.query(`UPDATE carroproducto SET cantidad = (cantidad - ${body.cantidad} ) WHERE idCarro = ${body.idCarro} AND idProducto = ${body.idProducto} `);
            
        }else{
            console.log("es menor 0");
            const connection = await getConnection();
            await connection.query(`DELETE FROM carroproducto WHERE idCarro = ${body.idCarro} AND idProducto = ${body.idProducto}`);
        }
        res.json({ message: "carroProducto quited" });
        const refresh = await methodsVC.refreshCarroMain( body.idCarro);
    }catch (error) {
        handleHttp(res, 'ErrorAddCarroProducto');
    }
};

const getCarroProductoID = async ({params}: Request, res: Response) => {
    try {
        const conn = await getConnection();
        const result = await conn.query("SELECT p.idProducto AS 'idProducto', p.nombre AS 'producto', c.cantidad AS 'cantidad', c.precio * c.cantidad AS 'precio' FROM carroproducto c LEFT JOIN producto p ON c.idProducto = p.idProducto WHERE idCarro = ? ", params.idCarro);
        res.json(result);
    }catch (error) {
        handleHttp(res, 'ErrorGetCarroProductoID');
    }
}

export {getCarro, getCarroID, addCarroProducto, quitCarroProducto, getCarroProductoID};