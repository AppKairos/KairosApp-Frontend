import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from '../models/response';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrecioService } from '../services/precio.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  addPrecioForm = new FormGroup({
    nombre: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z\s]+$/))
    ]),
    precioneto: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[0-9]+\.[0-9]+$/))
    ]),
    tipo: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9\s]+$/))
    ]),
    tam: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9\s]+$/))
    ]),
    precioresma: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[1-9][0-9]*$/))
    ]),
    pliegos: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[1-9][0-9]*$/))
    ])
  });

  updatePrecioForm = new FormGroup({
    nombre: new FormControl('',[
      Validators.pattern(new RegExp(/^[a-zA-Z\s]+$/))
    ]),
    precioneto: new FormControl('',[
      Validators.pattern(new RegExp(/^[0-9]+\.[0-9]+$/))
    ]),
    tipo: new FormControl('',[
      Validators.pattern(new RegExp(/^[a-zA-Z0-9\s]+$/))
    ]),
    tam: new FormControl('',[
      Validators.pattern(new RegExp(/^[a-zA-Z0-9\s]+$/))
    ]),
    precioresma: new FormControl('',[
      Validators.pattern(new RegExp(/^[1-9][0-9]*$/))
    ]),
    pliegos: new FormControl('',[
      Validators.pattern(new RegExp(/^[1-9][0-9]*$/))
    ])
  });

  precios = [];
  idPrecio = 0;
  nombre = '';

  constructor(private precioService: PrecioService, private modalservice: NgbModal) { }

  ngOnInit(): void {
  }

  addPrecio() {
    let precioNuevo = this.addPrecioForm.value;
    precioNuevo.estado = true;
    precioNuevo.precioneto = +precioNuevo.precioneto;
    precioNuevo.precioresma = +precioNuevo.precioresma;
    precioNuevo.pliegos = +precioNuevo.pliegos;
    this.precioService.addPrecio(precioNuevo).subscribe(response => {
      this.modalservice.dismissAll();

      if(response["nombre"] === "Adhesivo") {
        this.getPreciosAdhesivo();
      }else if(response["nombre"] === "Bond") {
        this.getPreciosBond();
      }else if(response["nombre"] === "Cartulina") {
        this.getPreciosCartulina();
      }else if(response["nombre"] === "Cartulina Hilada") {
        this.getPreciosCartulinaHilada();
      }else if(response["nombre"] === "Copia") {
        this.getPreciosCopia();
      }else if(response["nombre"] === "Couche") {
        this.getPreciosCouche();
      }else if(response["nombre"] === "Duplex") {
        this.getPreciosDuplex();
      }else if(response["nombre"] === "Papel Hueso") {
        this.getPreciosPapelHueso();
      }else if(response["nombre"] === "Químico") {
        this.getPreciosQuimico();
      }else if(response["nombre"] === "Sábana") {
        this.getPreciosSabana();
      }else if(response["nombre"] === "Triplex") {
        this.getPreciosTriplex();
      }
    });
  }

  updatePrecio() {
    let precioNuevo = this.updatePrecioForm.value;
    precioNuevo.nombre = (precioNuevo.nombre === "") ? null : precioNuevo.nombre;
    precioNuevo.precioneto = (precioNuevo.precioneto === "") ? null : +precioNuevo.precioneto;
    precioNuevo.tipo = (precioNuevo.tipo === "") ? null : precioNuevo.tipo;
    precioNuevo.tam = (precioNuevo.tam === "") ? null : precioNuevo.tam;
    precioNuevo.precioresma = (precioNuevo.precioresma === "") ? null : +precioNuevo.precioresma;
    precioNuevo.pliegos = (precioNuevo.pliegos === "") ? null : +precioNuevo.pliegos;
    precioNuevo.estado = true;
    this.precioService.updatePrecio(this.idPrecio, precioNuevo).subscribe(response => {
      this.idPrecio = 0;
      this.modalservice.dismissAll();

      if(response["nombre"] === "Adhesivo") {
        this.getPreciosAdhesivo();
      }else if(response["nombre"] === "Bond") {
        this.getPreciosBond();
      }else if(response["nombre"] === "Cartulina") {
        this.getPreciosCartulina();
      }else if(response["nombre"] === "Cartulina Hilada") {
        this.getPreciosCartulinaHilada();
      }else if(response["nombre"] === "Copia") {
        this.getPreciosCopia();
      }else if(response["nombre"] === "Couche") {
        this.getPreciosCouche();
      }else if(response["nombre"] === "Duplex") {
        this.getPreciosDuplex();
      }else if(response["nombre"] === "Papel Hueso") {
        this.getPreciosPapelHueso();
      }else if(response["nombre"] === "Químico") {
        this.getPreciosQuimico();
      }else if(response["nombre"] === "Sábana") {
        this.getPreciosSabana();
      }else if(response["nombre"] === "Triplex") {
        this.getPreciosTriplex();
      }
    });
  }

  deletePrecio() {
    this.precioService.deletePrecio(this.idPrecio).subscribe(response => {
      this.idPrecio = 0;
      this.modalservice.dismissAll();

      if(this.nombre === "Adhesivo") {
        this.getPreciosAdhesivo();
      }else if(this.nombre === "Bond") {
        this.getPreciosBond();
      }else if(this.nombre === "Cartulina") {
        this.getPreciosCartulina();
      }else if(this.nombre === "Cartulina Hilada") {
        this.getPreciosCartulinaHilada();
      }else if(this.nombre === "Copia") {
        this.getPreciosCopia();
      }else if(this.nombre === "Couche") {
        this.getPreciosCouche();
      }else if(this.nombre === "Duplex") {
        this.getPreciosDuplex();
      }else if(this.nombre === "Papel Hueso") {
        this.getPreciosPapelHueso();
      }else if(this.nombre === "Químico") {
        this.getPreciosQuimico();
      }else if(this.nombre === "Sábana") {
        this.getPreciosSabana();
      }else if(this.nombre === "Triplex") {
        this.getPreciosTriplex();
      }

      this.nombre = '';
    });
  }

  validarCampoAddPrecioForm(campo:string):string {
    const campoValidado = this.addPrecioForm.get(campo);
    return (!campoValidado.valid && campoValidado.touched) ? 'is-invalid' : campoValidado.touched ? 'is-valid' : '';
  }

  validarCampoUpdatePrecioForm(campo:string):string {
    const campoValidado = this.updatePrecioForm.get(campo);
    return (!campoValidado.valid && campoValidado.touched) ? 'is-invalid' : campoValidado.touched ? 'is-valid' : '';
  }

  openModalAddPrecio(targetModal){
    this.modalservice.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });     
  }

  openModalUpdatePrecio(targetModal, id: number){
    this.idPrecio = id;
    this.modalservice.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }
  
  openModalDeletePrecio(targetModal, id: number, nombre: any){
    this.idPrecio = id;
    this.nombre = nombre;
    this.modalservice.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
  }

  getPreciosAdhesivo() {
    this.precioService.getPreciosAdhesivo().subscribe(response => {
      this.precios = Object.assign([], response);
    });    
  }

  getPreciosBond() {
    this.precioService.getPreciosBond().subscribe(response => {
      console.log(response);
      this.precios = Object.assign([], response);
    });
  }

  getPreciosCartulina() {
    this.precioService.getPreciosCartulina().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosCartulinaHilada() {
    this.precioService.getPreciosCartulinaHilada().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosCopia() {
    this.precioService.getPreciosCopia().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosCouche() {
    this.precioService.getPreciosCouche().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosDuplex() {
    this.precioService.getPreciosDuplex().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosPapelHueso() {
    this.precioService.getPreciosPapelHueso().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosQuimico() {
    this.precioService.getPreciosQuimico().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosSabana() {
    this.precioService.getPreciosSabana().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }

  getPreciosTriplex() {
    this.precioService.getPreciosTriplex().subscribe(response => {
      this.precios = Object.assign([], response);
    });
  }
}
