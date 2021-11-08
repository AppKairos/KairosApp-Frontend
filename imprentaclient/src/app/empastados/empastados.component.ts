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
    facultad: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.\s,\"\'-_]*$/))
    ]),
    carrera: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.\s,\"\'-_]*$/))
    ]),
    tituloTesis: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.\s,\"\'-_]*$/))
    ]),
    trabajo: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.\s,\"\'-_]*$/))
    ]),
    autor: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.\s,\"\'-_]*$/))
    ]),
    tutor: new FormControl('',[
      Validators.required,
      Validators.pattern(new RegExp(/^[a-zA-Z0-9.\s,\"\'-_]*$/))
    ]),
    mes: new FormControl('',[Validators.required]),
    anio: new FormControl(2020,[Validators.required]),
    cantidad: new FormControl(0,[
      Validators.required,
      Validators.pattern(new RegExp(/^[1-9][0-9]*$/))
    ]),
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

  precioEmpastado = 0;

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

    this.getPrecioEmpastado();
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

  validarCampo(campo:string):string {
    const campoValidado = this.profileForm.get(campo);
    return (!campoValidado.valid && campoValidado.touched) ? 'is-invalid' : campoValidado.touched ? 'is-valid' : '';
  }

  guardarReserva() {
    let formulario = this.profileForm.value;
    let usuario = JSON.parse(localStorage.getItem('usuario')).usuario;
    console.log(usuario);
    formulario.cantidad = +formulario.cantidad;
    formulario["idUsuario"] = usuario.id;
    formulario["tipoUsuario"] = usuario.tipoUsuario;
    console.log(usuario.tipoUsuario);
    formulario["estado"] = true;
    console.log(formulario);
    this.empastadoService.reservarEmpastado(formulario).subscribe(response => {
      console.log(response);
      alert('Empastado reservado. Clic en aceptar para regresar.');
      this.router.navigate(['/empastados']);
    });
  }

  getPrecioEmpastado() {
    this.empastadoService.getPrecioEmpastado().subscribe(response => {
      this.precioEmpastado = +response["precio"];
    });
  }
}
