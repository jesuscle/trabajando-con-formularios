import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Empleado } from '../modelos/empleado';

@Component({
  selector: 'app-form-model-group',
  templateUrl: './form-model-group.component.html',
  styleUrls: ['./form-model-group.component.css'],
})
export class FormModelGroupComponent implements OnInit {

  empleado: Empleado;

  constructor() {
    this.empleado = new Empleado('','',0,'',0);
    //this.empleado = null;
  }

  ngOnInit(): void {}

  guardarEmpleado(form: NgForm) {
    console.log(form.value);
    this.empleado = form.value;
    console.log(this.empleado.direccion.calle);

  }
}
