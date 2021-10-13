import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-empastados',
  templateUrl: './empastados.component.html',
  styleUrls: ['./empastados.component.css']
})
export class EmpastadosComponent implements OnInit {

  facultad = '';
  carrera = '';
  titulo = '';
  trabajo = '';
  autor = '';
  tutor = '';
  mes = '';
  anio = '';
  //precioTotal: number;
  cantidad = 0;
  //precio = 0;
  cliente = '';

  constructor() { }

  ngOnInit(): void {
    var usuarioEmpastado = {};
    
    try{
      usuarioEmpastado = JSON.parse(localStorage.getItem('usuario'));
    }catch(e){}
    
    if(usuarioEmpastado["usuario"]){
      this.cliente = usuarioEmpastado["usuario"].nombre;
    }else{
      this.cliente = '';
    }
  } 

  habilitado():boolean {
    var usuarioEmpastado = {};
    try{
      usuarioEmpastado = JSON.parse(localStorage.getItem('usuario'));
    }catch(e){}

    if(usuarioEmpastado['token']){
      return true;
    }else {
      return false;
    }
  }
}
