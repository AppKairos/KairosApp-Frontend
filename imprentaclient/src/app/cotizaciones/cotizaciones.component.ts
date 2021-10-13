import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AfichesService } from '../services/afiches.service';
import { Response } from '../models/response';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cotizaciones',
  templateUrl: './cotizaciones.component.html',
  styleUrls: ['./cotizaciones.component.css']
})
export class CotizacionesComponent implements OnInit {

  profileForm = new FormGroup({
    cantidad: new FormControl(),
    Tam_papel: new FormControl(''),
    color: new FormControl(''),
    tipo_papel: new FormControl(''),
    gramaje_papel: new FormControl(''),
    tam_placa: new FormControl(''),
    precio_design: new FormControl(),
    precio_acabado: new FormControl(),
    ganancia: new FormControl()
  });

  sinFactura = 0;
  conFactura = 0;
  iva = 0;
  total = 0;

  constructor(private afichesService: AfichesService) { }

  ngOnInit(): void {
  }
  
  cotizarAfiche(){
    console.log(this.profileForm.value); 
    this.afichesService.cotizarAfiche(this.profileForm.value).subscribe(response => {
      console.log(response);
      var responseJSON = JSON.parse(JSON.stringify(response));
      this.sinFactura = responseJSON.sin_Factura;
      this.conFactura = responseJSON.con_Factura;
      this.iva = responseJSON.iva;
      this.total = responseJSON.total;
    });
  }
}
