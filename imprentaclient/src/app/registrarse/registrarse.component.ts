import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrarseService } from '../services/registrarse.service';
import { Usuario } from '../models/Usuario';
import { Response } from '../models/response';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { SocialAuthService, SocialUser } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  profileForm = new FormGroup({
    ci: new FormControl(0,[
      Validators.required,
      Validators.pattern(new RegExp(/^[\d]{7,8}$/))
    ]),
    nombre: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp( /^([A-Za-z,.'-]{2,12}\s?){1,}/))
    ]),
    correo: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    ]),
    telefono: new FormControl(0,[
      Validators.required,
      Validators.pattern(new RegExp(/^([0-9]{8,8})$|^([0-9]{5,5})$/))
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))
    ])
  });

  // socialUser = {};
  // isLoggedin: boolean = null;

  constructor(private authService: SocialAuthService, private registrarseService: RegistrarseService, private modalservice: NgbModal, private router: Router) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
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
      this.registrarGoogle(socialUser);
    });
  }

  validarCampo(campo:string):string {
    const campoValidado = this.profileForm.get(campo);
    return (!campoValidado.valid && campoValidado.touched) ? 'is-invalid' : campoValidado.touched ? 'is-valid' : '';
  }

  onSubmit() {
    this.registrarseService.registrarse(this.profileForm.value).subscribe(response => {
      //Object.assign([], response);
      alert('Registrado correctamente');
      this.router.navigate(['/login']);
    });
  }

  registrarGoogle(socialUser: any): void {
    this.registrarseService.registrarseGoogle(socialUser).subscribe(response => {
      alert('Registrado correctamente');
      this.router.navigate(['/login']);
    });
  }

  iniciarGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  iniciarFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  logoutGoogleFacebook(): void {
    this.authService.signOut();
  }
}
