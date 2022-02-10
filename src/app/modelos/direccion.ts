export class Direccion {

  calle: string = '';
  numero: number = 0;
  localidad: string = '';

  constructor(calle: string, numero: number){
    this.calle = calle;
    this.numero = numero;
  }

}
