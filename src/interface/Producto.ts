export interface Producto {
    id?: string;
    idCategoria: number;
    codigoBarras: string;
    nombre: string;
    descripcion: string;
    existencias: number;
    precio: number;
    imagenProducto: string;   
}