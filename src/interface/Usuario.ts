export interface Usuario {
    id?: string;
    tipoUsuario: number;
    nombreCompleto: string;
    fechaNacimiento: Date;
    correoElectronico: string;
    telefono: string;
    nombreUsuario: string;
    contrasena: string;   
}