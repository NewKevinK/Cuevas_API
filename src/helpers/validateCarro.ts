import e from "express";
import { getConnection } from "../database/dbConfig";

export const getDate = async () => {
    try{
        const d = new Date();
        d.toLocaleDateString('en-GB').split('/').reverse().join('');
        return d;
    }catch (error) {
        
    }
};

const createCarroMain = async (phone: string) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario FROM usuario WHERE telefono = ?" ,phone);
        var resultJSON = JSON.parse(JSON.stringify(result));
        const newCarro = {
            idCarro: resultJSON[0].idUsuario,
            totalProductos :0,
            subTotal:0
        }
        
        let res = await connection.query("INSERT INTO carromain SET ?", newCarro); 
        return true;
    }catch (error) {
        return false;
    }
}

const typeAddCarroProducto = async (idCarro: number, idProducto: number, cantidad: number) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT idProducto FROM carroproducto WHERE idProducto = ? AND idCarro = ?" ,[idProducto, idCarro]);
        var resultJSON = JSON.parse(JSON.stringify(result));

        if(resultJSON.length > 0){
            let res = await connection.query("UPDATE carroproducto SET cantidad = cantidad + ? WHERE idProducto = ? AND idCarro = ?", [cantidad, idProducto, idCarro]); 
        }else{
            let res = await connection.query("INSERT INTO carroproducto SET ?", {idCarro, idProducto, cantidad}); 
        }
        return true;
    }catch (error) {
        
    }
}

const refreshCarroMain = async (idCarro: number) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT SUM(cantidad) AS totalProductos, SUM(cantidad * producto.precio) AS subTotal FROM carroproducto INNER JOIN producto ON carroproducto.idProducto = producto.idProducto WHERE idCarro = ?" ,idCarro);
        var resultJSON = JSON.parse(JSON.stringify(result));
        console.log(resultJSON);
        console.log("---------------");
        console.log(resultJSON[0]);
        let res = await connection.query("UPDATE carromain SET ? WHERE idCarro = ?", [resultJSON[0], idCarro]); 
        return true;
    }catch (error) {
        console.log(error);
    }
}

const subCar = async (idUsuario: number) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT subTotal FROM carromain WHERE idCarro = ?" ,idUsuario);
        var resultJSON = JSON.parse(JSON.stringify(result));
        return resultJSON[0].subTotal;
    }catch (error) {
        console.log(error);
    }
}

const resetCar = async (idCarro: number) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("DELETE FROM carroproducto WHERE idCarro = ?" ,idCarro);
        return true;
    }catch (error) {
        console.log(error);
    }
}

const ordenProductos = async (idCarro: number, idOrden: number) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT p.idProducto AS 'idProducto', p.nombre AS 'producto', c.cantidad AS 'cantidad', c.precio * c.cantidad AS 'precio' FROM carroproducto c LEFT JOIN producto p ON c.idProducto = p.idProducto WHERE idCarro = ? ", idCarro);
        

        let listaProducto = [];
        var data=JSON.parse(JSON.stringify(result));

        for(var i = 0; i < data.length; i++){
            
            listaProducto.push(data[i]);
            listaProducto[i].idOrden = idOrden;
            
            let res = await connection.query("INSERT INTO ordenproducto SET ?", listaProducto[i]);
        }   
        
        return true;
    }catch (error) {
        console.log(error);
    }
}

export const methods = {getDate, createCarroMain, typeAddCarroProducto, refreshCarroMain, subCar, resetCar, ordenProductos};


