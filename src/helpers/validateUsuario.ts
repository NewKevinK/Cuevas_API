import { getConnection } from "../database/dbConfig";

const existUser = async (nu: string) => {
    try{
        const conn = await getConnection();
        let result = await conn.query('SELECT nombreUsuario FROM usuario WHERE nombreUsuario = ?', nu);
        var resultJSON = JSON.parse(JSON.stringify(result));

        //
        //console.log(resultJSON[0]);
        if(resultJSON[0].nombreUsuario === nu){
            return true;
        }else{
            return false;
        }
        
    }catch (error) {
        
    }
    
};

const existPhone = async (phone: string) => {
    try{
        const conn = await getConnection();
        let result = await conn.query('SELECT telefono FROM usuario WHERE telefono = ?', phone);
        var resultJSON = JSON.parse(JSON.stringify(result));

        if(resultJSON[0].telefono === phone){
            return true;
        }else{
            return false;
        }
        
    }catch (error) {
        
    }
    
};

const findPass = async (idUsuario: string) => {
    try{
        let connection = await getConnection();
        let result = await connection.query("SELECT contrasena FROM usuario WHERE idUsuario = ?", idUsuario);
        
        var data=JSON.parse(JSON.stringify(result));
        
        const encryp = data[0].contrasena;
        return encryp;
    }catch (error) {
        
    }
}

const findOnePhone = async (phone: string) => {
    try {
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario FROM usuario WHERE telefono = ?", phone);
        
        var data=JSON.parse(JSON.stringify(result));
        
        const id = data[0].idUsuario;
        const encryp = await findPass(id);
        return encryp;
    } catch (error) {        
    }
}

const findOneUser = async (user: string) => {
    try {
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario FROM usuario WHERE nombreUsuario = ?", user);
        
        var data=JSON.parse(JSON.stringify(result));
        
        const id = data[0].idUsuario;
        const encryp = await findPass(id);
        return encryp;
    } catch (error) {        
    }
}

const getIdP = async (phone: string) => {
    try {
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario FROM usuario WHERE telefono = ?", phone);
        
        var data=JSON.parse(JSON.stringify(result));
        
        const id = data[0].idUsuario;
        
        return id;
    } catch (error) {        
    }
}

const getIdU = async (user: string) => {
    try {
        let connection = await getConnection();
        let result = await connection.query("SELECT idUsuario, tipoUsuario FROM usuario WHERE nombreUsuario = ?", user);
        
        var data=JSON.parse(JSON.stringify(result));
        const userAll = {
            id: data[0].idUsuario,
            tipoUsuario: data[0].tipoUsuario,
        };
        //const id = data[0].idUsuario;
        
        return userAll;
    } catch (error) {        
    }
}




export const methods = {existUser, existPhone, findPass, findOnePhone, findOneUser, getIdP, getIdU};