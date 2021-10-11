import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/Producto';
import { Response } from '../models/response';
import { FormGroup, FormBuilder} from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CabeceraService } from '../services/cabecera.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public productosLista: any[];
  public producto: any;

  constructor(private cabeceraService: CabeceraService, private fb: FormBuilder, private modalservice: NgbModal, private router: Router) {}

  ngOnInit(): void {
    //this.getProductos();
  }

  // getProductos(){
  //   this.productoService.getProductos().subscribe(response =>
  //   {
  //     this.productosLista = Object.assign([], response);
  //     console.log(this.productosLista);
  //   });
  // }

  // getProducto(id: number){
  //   this.productoService.getProducto(id).subscribe(response => {
  //     this.producto = Object.assign([], response);
  //     console.log(this.producto);
  //   });
  // }
}
