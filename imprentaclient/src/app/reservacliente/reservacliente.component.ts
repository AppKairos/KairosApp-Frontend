import { Component, OnInit } from '@angular/core';
import { EmpastadoService } from '../services/empastado.service';
import { ReservaService } from '../services/reserva.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservacliente',
  templateUrl: './reservacliente.component.html',
  styleUrls: ['./reservacliente.component.css']
})
export class ReservaclienteComponent implements OnInit {
  empastadosCliente = [];

  facultad = '';
  carrera = '';
  titulo = '';
  trabajo = '';
  autor = '';
  tutor = '';
  mes = '';
  anio = '';
  cantidad = 0;

  precioEmpastado = 0;

  idReservaTerminado = 0;

  constructor(private reservaService: ReservaService, private empastadoService: EmpastadoService, private modalservice: NgbModal) { }

  ngOnInit(): void {
    this.getReservasEmpastados();

    this.getPrecioEmpastado();
  }

  putTerminadoTrue() {
    this.reservaService.putReservaTerminadoTrue(this.idReservaTerminado).subscribe(response => {
      console.log(response);
      this.idReservaTerminado = 0;
      this.modalservice.dismissAll();
      this.getReservasEmpastados();
    });
  }

  getReservasEmpastados() {
    let idUsuario = JSON.parse(localStorage.getItem('usuario'))["usuario"]["id"];
    this.empastadosCliente = [];
    this.reservaService.getReservasUsuario(idUsuario).subscribe(response => {
      console.log(response);
      let empastadosUsuarios = Object.assign([], response);
      empastadosUsuarios.forEach(empastadoUsuario => {
        this.empastadosCliente.push(empastadoUsuario);
      });
    });
  }

  openModal(targetModal, empastado: any){
    
    this.facultad = empastado.facultad;
    this.carrera = empastado.carrera;
    this.titulo = empastado.tituloTesis;
    this.trabajo = empastado.trabajo;
    this.autor = empastado.autor;
    this.tutor = empastado.tutor;
    this.mes = empastado.mes;
    this.anio = empastado.anio;
    this.cantidad = empastado.cantidad;

    this.modalservice.open(targetModal, {
      centered: true,
      backdrop: 'static'
    });
    console.log(empastado);

  }

  getPrecioEmpastado() {
    this.empastadoService.getPrecioEmpastado().subscribe(response => {
      this.precioEmpastado = +response["precio"];
    });
  }

}
