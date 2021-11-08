import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Usuario } from '../models/Usuario';
import { Response } from '../models/response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CabeceraService } from '../services/cabecera.service';

import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  profileForm = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))      
    ])
  });

  //usuario: any;
  // socialUser = {};
  // isLoggedin: boolean = null;

  constructor(private authService: SocialAuthService, private loginService: LoginService, private cabeceraService: CabeceraService, private modalservice: NgbModal, private router: Router) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {

    // this.cabeceraService.storeUser("vacio");
    // try {
    //   this.authService.signOut(); 
    // } catch (error) { console.log(error) }

    if(!(JSON.parse(localStorage.getItem('usuario'))["token"] == undefined)){
      this.router.navigate(['/productos']);
    }

    this.authService.authState.subscribe((user) => {
      // this.socialUser = user;
      // this.isLoggedin = (user != null);
      // console.log(this.socialUser);
      if(user){
        let socialUser = {};
        socialUser['authToken'] = user['authToken'];
        socialUser['idToken'] = user['idToken'];
        socialUser['name'] = user['name'];
        socialUser['firstName'] = user['firstName'];
        socialUser['lastName'] = user['lastName'];
        socialUser['email'] = user['email'];
        socialUser['rol'] = 'cliente';
        socialUser['activo'] = true;
        socialUser['tipoUsuario'] = 'Gmail';
        this.loginGoogle(socialUser);
      }
    });
  }

  validarCampo(campo:string):string {
    const campoValidado = this.profileForm.get(campo);
    return (!campoValidado.valid && campoValidado.touched) ? 'is-invalid' : campoValidado.touched ? 'is-valid' : '';
  }

  onSubmit(): void {
    this.loginService.login(this.profileForm.value).subscribe(response => {
      console.log(response);
      if(response["token"]){
        //alert('Usuario verificado');
        this.cabeceraService.storeUser(response);
        this.router.navigate(['/productos']);
      }else{
        this.cabeceraService.storeUser('vacio');
      }
    });
  }

  // logout(){
  //   this.cabeceraService.storeUser("vacio");
  //   this.router.navigate(['/productos']);
  // }

  iniciarGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  loginGoogle(usuarioGoogleLogin: any): void {
    this.loginService.loginGoogle(usuarioGoogleLogin).subscribe(response => {
      console.log(response);
      if(!(response["token"] === "")){
        let usuario = {};
        usuario['token'] = response['token'];
        usuario['usuario'] = response;
        //alert('Usuario verificado');
        this.cabeceraService.storeUser(usuario);
        this.router.navigate(['/productos']);
      }else{
        this.cabeceraService.storeUser('vacio');
      }
    });
  }

  iniciarFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logoutGoogleFacebook(): void {
    this.authService.signOut();
  }
}