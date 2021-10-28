import { Component, OnInit } from '@angular/core';
import { EmpastadoService } from '../services/empastado.service';
import { ReservaService } from '../services/reserva.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  empastadosClientes = [];

  facultad = '';
  carrera = '';
  titulo = '';
  trabajo = '';
  autor = '';
  tutor = '';
  mes = '';
  anio = '';
  cantidad = 0;

  constructor(private reservaService: ReservaService, private empastadoService: EmpastadoService, private modalservice: NgbModal) { }

  ngOnInit(): void {
    this.getReservasEmpastados();
  }

  getReservasEmpastados() {
    this.reservaService.getEmpastadosReservas().subscribe(response => {
      console.log(response);
      let empastadosUsuarios = Object.assign([], response);
      empastadosUsuarios.forEach(empastadoUsuario => {
        this.empastadosClientes.push(empastadoUsuario);
        // this.empastadosClientes.push({ nombreCliente: empastadoUsuario.nombre, email: empastadoUsuario.email, titulo: empastadoUsuario.tituloTesis });
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
}
