import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProductoService } from './services/producto.service';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { RegistrarseService } from './services/registrarse.service';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { EmpastadosComponent } from './empastados/empastados.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InicioComponent,
    ProductosComponent,
    NosotrosComponent,
    LoginComponent,
    RegistrarseComponent,
    CotizacionesComponent,
    EmpastadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    ProductoService,
    RegistrarseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
