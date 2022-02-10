import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Factura } from '../modelos/factura';

@Component({
  selector: 'app-form-facturas',
  templateUrl: './form-facturas.component.html',
  styleUrls: ['./form-facturas.component.css']
})
export class FormFacturasComponent implements OnInit {

  factura: Factura;
  constructor() {
    this.factura = new Factura();
  }

  ngOnInit(): void {
  }

  guardarFactura(form: NgForm){
    this.factura = form.value;

    console.log(this.factura.titulo);
    console.log(this.factura.numPaginas);
  }

}
