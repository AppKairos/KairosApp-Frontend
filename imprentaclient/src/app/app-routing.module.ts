import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  { path:'inicio', component: InicioComponent, pathMatch: 'full' },
  { path:'nosotros', component: NosotrosComponent, pathMatch: 'full' },
  { path:'productos', component: ProductosComponent, pathMatch: 'full' },
  { path:'**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
