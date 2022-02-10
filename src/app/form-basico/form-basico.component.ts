import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../modelos/usuario';

@Component({
  selector: 'app-form-basico',
  templateUrl: './form-basico.component.html',
  styleUrls: ['./form-basico.component.css']
})
export class FormBasicoComponent implements OnInit {

  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario('Jesús', 'Salinas', 45);
   }

  ngOnInit(): void {
  }

  guardarUsuario(form: NgForm): void{

    if(form.invalid){
      return;
    }

    console.log(form.value);
    console.log(form.value.nombre);
    console.log(form.value.apellidos);

    this.usuario = form.value;

    // Servicio que usa rest
    // ...

  }
}
