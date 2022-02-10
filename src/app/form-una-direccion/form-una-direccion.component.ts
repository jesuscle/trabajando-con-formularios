import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-form-una-direccion',
  templateUrl: './form-una-direccion.component.html',
  styleUrls: ['./form-una-direccion.component.css'],
})
export class FormUnaDireccionComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('Jesús', 'Salinas', 45);
  }

  ngOnInit(): void {}

  guardarUsuario(form: NgForm): void {
    console.log(form.value);
    console.log(form.value.nombre);
    console.log(form.value.apellidos);

    this.usuario = form.value;

    // Servicio que usa rest
    // ...
  }
}
