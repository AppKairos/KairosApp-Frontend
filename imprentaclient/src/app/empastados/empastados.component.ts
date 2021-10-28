import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpastadoService } from '../services/empastado.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empastados',
  templateUrl: './empastados.component.html',
  styleUrls: ['./empastados.component.css']
})
export class EmpastadosComponent implements OnInit {

  profileForm = new FormGroup({
    facultad: new FormControl('',[Validators.required]),
    carrera: new FormControl('',[Validators.required]),
    tituloTesis: new FormControl('',[Validators.required]),
    trabajo: new FormControl('',[Validators.required]),
    autor: new FormControl('',[Validators.required]),
    tutor: new FormControl('',[Validators.required]),
    mes: new FormControl('',[Validators.required]),
    anio: new FormControl(2020,[Validators.required]),
    cantidad: new FormControl(0,[Validators.required]),
  });

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

  constructor(private empastadoService: EmpastadoService, private router: Router) { }

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

  guardarReserva() {
    let formulario = this.profileForm.value;
    let usuario = JSON.parse(localStorage.getItem('usuario')).usuario;
    console.log(usuario);
    formulario.cantidad = +formulario.cantidad;
    formulario["idUsuario"] = usuario.id;
    formulario["tipoUsuario"] = usuario.tipoUsuario;
    formulario["estado"] = true;
    console.log(formulario);
    this.empastadoService.reservarEmpastado(formulario).subscribe(response => {
      console.log(response);
      alert('Empastado reservado. Clic en aceptar para regresar a productos');
      this.router.navigate(['/productos']);
    });
  }
}
