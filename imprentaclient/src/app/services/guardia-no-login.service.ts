import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardiaNoLoginService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    let usuario = JSON.parse(localStorage.getItem('usuario'));
    if(usuario === "vacio" || usuario === null) {
      return true;
    }else {
      console.log('No debes iniciar sesion para ingresar a la pagina.');
      this.router.navigate(['/inicio']);
      return false;
    }
  }
}
