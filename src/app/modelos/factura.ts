import { Detalles } from "./detalles";
import { Direccion } from "./direccion";
import { Documento } from "./documento";

export class Factura extends Documento{

  direccion: Direccion;
  detalles: Detalles;

  constructor(){
    super();
    this.direccion = new Direccion('',0);
    this.detalles = new Detalles();

  }

}
