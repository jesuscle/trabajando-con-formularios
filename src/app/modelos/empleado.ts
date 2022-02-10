import { Direccion } from "./direccion";
import { Usuario } from "./usuario";

export class Empleado extends Usuario{

  direccion: Direccion;

  constructor(nombre: string, apellidos: string, edad: number, calle:string, numero: number){
    super(nombre, apellidos, edad);
    this.direccion = new Direccion(calle, numero);
  }

}
