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
import { FormsModule } from '@angular/forms';
import { CabeceraComponent } from './cabecera/cabecera.component';

import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AfichesService } from './services/afiches.service';
import { CabeceraService } from './services/cabecera.service';
import { LoginService } from './services/login.service';
import { SelloService } from './services/sello.service';
import { PreciosComponent } from './precios/precios.component';

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
    EmpastadosComponent,
    CabeceraComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    ProductoService,
    RegistrarseService,
    AfichesService,
    CabeceraService,
    LoginService,
    SelloService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('621789969255-9vdjbl9mimhfepbb25hcv860gs6masam.apps.googleusercontent.com')
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('296934472249724')
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
