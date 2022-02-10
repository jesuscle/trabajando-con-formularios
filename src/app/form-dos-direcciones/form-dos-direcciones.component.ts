import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-form-dos-direcciones',
  templateUrl: './form-dos-direcciones.component.html',
  styleUrls: ['./form-dos-direcciones.component.css']
})
export class FormDosDireccionesComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('', '', 0);
  }

  ngOnInit(): void {}

  guardarUsuario(): void {

    console.log(this.usuario);

    // Servicio que usa rest
    // ...
  }

  verDatos(){
    console.log(this.usuario);
  }

}
