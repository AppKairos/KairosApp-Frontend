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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  profileForm = new FormGroup({
    ci: new FormControl(0,[
      Validators.required,
      Validators.pattern(new RegExp(/^[\d]{7,8}$/))
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/))      
    ])
  });

  //usuario: any;

  constructor(private loginService: LoginService, private cabeceraService: CabeceraService, private modalservice: NgbModal, private router: Router) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.logout();
  }

  onSubmit(): void {
    console.log(this.profileForm.value);
    this.loginService.login(this.profileForm.value).subscribe(response => {
      if(response["token"]){
        alert('Usuario verificado');
        this.cabeceraService.storeUser(response);
        this.router.navigate(['/productos']);
      }else{
        this.cabeceraService.storeUser('vacio');
      }
    });
  }

  logout(){
    this.cabeceraService.storeUser("vacio");
  }

  validarCampo(campo:string):string {
    const campoValidado = this.profileForm.get(campo);
    return (!campoValidado.valid && campoValidado.touched) ? 'is-invalid' : campoValidado.touched ? 'is-valid' : '';
  }
}