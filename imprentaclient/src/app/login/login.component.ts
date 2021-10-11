import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
    ci: new FormControl(),
    password: new FormControl('')
  });

  usuario: any;

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
}