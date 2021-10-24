import { Component, OnInit } from '@angular/core';
import { EmpastadoService } from '../services/empastado.service';
import { ReservaService } from '../services/reserva.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  empastadosClientes = [];

  constructor(private reservaService: ReservaService, private empastadoService: EmpastadoService) { }

  ngOnInit(): void {
    this.getReservasEmpastados();
  }

  getReservasEmpastados() {
    this.reservaService.getReservasEmpastados().subscribe(response1 => {
      let reservasEmpastados = Object.assign([], response1);
      let empastados = [];
      let clientes = [];
      reservasEmpastados.forEach(reservaEmpastado => {
        this.empastadoService.getEmpastadosById(reservaEmpastado.idItem).subscribe(response2 => {
          
        });
        
      });
    });
  }
}
