import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { LoginComponent } from './login/login.component';
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { CotizacionesComponent } from './cotizaciones/cotizaciones.component';
import { EmpastadosComponent } from './empastados/empastados.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent, pathMatch: 'full' },
  { path:'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path:'productos', component: ProductosComponent, pathMatch: 'full' },
  { path:'login', component: LoginComponent, pathMatch: 'full' },
  { path:'registrarse', component: RegistrarseComponent, pathMatch: 'full' },
  { path:'cotizaciones', component: CotizacionesComponent, pathMatch: 'full' },
  { path:'empastados', component: EmpastadosComponent, pathMatch: 'full' },
  { path:'**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
