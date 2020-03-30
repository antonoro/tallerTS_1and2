export class Student {

    codigo: number;
    edad: number;
    telefono: string;
    direccion: string;

    constructor(pCodigo: number, pEdad: number, pTelefono: string, pDireccion: string)
    {
        this.codigo = pCodigo;
        this.edad = pEdad;
        this.telefono = pTelefono;
        this.direccion = pDireccion;

    }
}