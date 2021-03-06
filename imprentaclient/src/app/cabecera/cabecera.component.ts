import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CabeceraService } from '../services/cabecera.service';
import { Router, RouterModule, Routes } from '@angular/router';

import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit, OnDestroy {

  visible = true;
  admin = true;
  observable$: Observable<any>;

  constructor(private authService: SocialAuthService, private loginService: LoginService, private cabeceraService: CabeceraService, private router: Router) { }

  ngOnDestroy() {
    localStorage.setItem('visible',JSON.stringify(this.visible));
    localStorage.setItem('admin',JSON.stringify(this.admin));
  }

  ngOnInit(): void {
    this.visible = (localStorage.getItem('visible') === 'true');
    this.admin = (localStorage.getItem('admin') === 'true');

    window.onbeforeunload = () => this.ngOnDestroy();
    
    this.observable$ = this.cabeceraService.getSubject$();
    this.observable$.subscribe(data => {
      console.log(data);
      if(data.usuario["token"]){
        this.visible = false;
        localStorage.setItem('visible',JSON.stringify(this.visible));
        if(data.usuario["usuario"].rol === "admin"){
          this.admin = true;
          localStorage.setItem('admin',JSON.stringify(this.admin));
        }else{
          this.admin = false;
          localStorage.setItem('admin',JSON.stringify(this.admin));
        }
      }else{
        this.visible = true;
        localStorage.setItem('visible',JSON.stringify(this.visible));
        this.admin = false;
        localStorage.setItem('admin',JSON.stringify(this.admin));
      }
    });
  }

  async logout(){
    this.cabeceraService.storeUser("vacio");
    try {
      await this.authService.signOut(); 
    } catch (error) { console.log(error) }
    this.router.navigate(['/login']);
  }
}
