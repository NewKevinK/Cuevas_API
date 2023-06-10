import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getConnection } from "../database/dbConfig";

const getSucursal = async (req: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorGetSucursal');
    }
}

const getSucursalID = async ({params}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorGetSucursalID');
    }
}

const addSucursal = async ({body}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorAddSucursal');
    }
}

const updateSucursal = async ({params, body}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorUpdateSucursal');
    }
}

const deleteSucursal = async ({params}: Request, res: Response) => {
    try {

    }catch (error) {
        handleHttp(res, 'ErrorDeleteSucursal');
    }
}

export {getSucursal, getSucursalID, addSucursal, updateSucursal, deleteSucursal};
