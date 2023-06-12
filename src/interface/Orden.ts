export interface Orden {
    id?: string;
    idCarro: number;
    idUsuarioCliente: number;
    idDomicilio: number;
    idSucursal: number;
    fecha: Date | undefined;
    estado: string;
    total: number; 
    metodoPago: string;
    tiempoEstimado: string;
    tiempoEntrega: string;  
}