import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrarseService } from '../services/registrarse.service';
import { Usuario } from '../models/Usuario';
import { Response } from '../models/response';
import { FormGroup, FormControl} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  profileForm = new FormGroup({
    ci: new FormControl(),
    nombre: new FormControl(''),
    correo: new FormControl(''),
    telefono: new FormControl(),
    password: new FormControl('')
  });

  constructor(private registrarseService: RegistrarseService, private modalservice: NgbModal, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.registrarseService.registrarse(this.profileForm.value).subscribe(response => {
      //Object.assign([], response);
      console.log(response);
      alert('Registrado correctamente');
      this.router.navigate(['/productos']);
    });
  }
}
