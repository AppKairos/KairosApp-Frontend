import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegistrarseService } from '../services/registrarse.service';
import { Usuario } from '../models/Usuario';
import { Response } from '../models/response';
import { FormGroup, FormBuilder} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  constructor(private registrarseService: RegistrarseService, private fb: FormBuilder, private modalservice: NgbModal) { }

  ngOnInit(): void {
  }

  registrarse(newUsuario: Usuario){
    this.registrarseService.registrarse(newUsuario).subscribe(response =>
    {
      console.log(response);
    });
  }

}
