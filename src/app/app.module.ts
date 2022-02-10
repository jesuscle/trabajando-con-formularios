import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { FormModelGroupComponent } from './form-model-group/form-model-group.component';
import { FormFacturasComponent } from './form-facturas/form-facturas.component';
import { FormUnaDireccionComponent } from './form-una-direccion/form-una-direccion.component';
import { FormDosDireccionesComponent } from './form-dos-direcciones/form-dos-direcciones.component';

@NgModule({
  declarations: [
    AppComponent,
    FormBasicoComponent,
    FormModelGroupComponent,
    FormFacturasComponent,
    FormUnaDireccionComponent,
    FormDosDireccionesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
