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

export const methods = {getDate, createCarroMain};


