import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { EmpastadosComponent } from './empastados/empastados.component';
import { GuardiaLoginService } from './services/guardia-login.service';
import { GuardiaAdminService } from './services/guardia-admin.service';
import { GuardiaNoLoginService } from './services/guardia-no-login.service';
import { ReservaComponent } from './reserva/reserva.component';
import { PreciosComponent } from './precios/precios.component';
import { ReservaclienteComponent } from './reservacliente/reservacliente.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent, pathMatch: 'full' },
  { path:'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path:'productos', component: ProductosComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent, pathMatch: 'full', canActivate: [GuardiaNoLoginService] },
  { path:'registrarse', component: RegistrarseComponent, pathMatch: 'full', canActivate: [GuardiaNoLoginService] },
  { path:'cotizaciones', component: CotizacionesComponent, pathMatch: 'full', canActivate: [GuardiaLoginService,GuardiaAdminService] },
  { path:'empastados', component: EmpastadosComponent, pathMatch: 'full' },
  { path:'reserva', component: ReservaComponent, pathMatch: 'full', canActivate: [GuardiaLoginService,GuardiaAdminService] },
  { path:'precios', component: PreciosComponent, pathMatch: 'full', canActivate: [GuardiaLoginService,GuardiaAdminService] },
  { path:'reservacliente', component: ReservaclienteComponent, pathMatch: 'full', canActivate: [GuardiaLoginService] },
  { path:'**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
