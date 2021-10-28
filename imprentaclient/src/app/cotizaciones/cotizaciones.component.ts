import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AfichesService } from '../services/afiches.service';
import { Response } from '../models/response';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PrecioService } from '../services/precio.service';

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

  precios = [];
  gramajesPorNombre = [];
  precioBruto = 0;
  precioFinal = 0;
  iva = 0;
  total = 0;

  constructor(private afichesService: AfichesService, private precioService: PrecioService) { }

  ngOnInit(): void {
    this.getPrecios();
  }
  
  cotizarAfiche(){
    console.log(this.profileForm.value);
    this.afichesService.cotizarAfiche(this.profileForm.value).subscribe(response => {
      console.log(response);
      var responseJSON = JSON.parse(JSON.stringify(response));
      this.precioBruto = responseJSON.neto;
      this.precioFinal = responseJSON.con_Factura;
      this.iva = responseJSON.iva;
      this.total = responseJSON.total;
    });
  }

  getPrecios(){
    this.precioService.getNombresPrecios().subscribe(response => {
      let nombresPrecios = Object.assign([], response);
      nombresPrecios.forEach(nombrePrecio => {
        this.precios.push(nombrePrecio);
      });
    });
  }

  getGramajesTipo(nombre: any) {
    this.gramajesPorNombre = [];
    this.precioService.getGramajesTipo(nombre).subscribe(response => {
      let preciosPorNombre = Object.assign([], response);
      preciosPorNombre.forEach(precio => {
        this.gramajesPorNombre.push(precio.nombre + ' ' + precio.tipo);
      });
    });
  }
}
