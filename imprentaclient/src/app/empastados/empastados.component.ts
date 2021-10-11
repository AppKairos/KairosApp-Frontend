import { Component, OnInit } from '@angular/core';

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
  precioTotal: number;
  cantidad = 0;

  constructor() { }

  ngOnInit(): void {
  }

  habilitado():boolean {
    if(JSON.parse(localStorage.getItem('usuario')).token){
      return true;
    }else {
      return false;
    }
  }
}
