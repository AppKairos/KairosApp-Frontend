import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CabeceraService } from '../services/cabecera.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit, OnDestroy {

  visible = true;
  observable$: Observable<any>;

  constructor(private cabeceraService: CabeceraService, private router: Router) { }

  ngOnDestroy() {
    localStorage.setItem('visible',JSON.stringify(this.visible));
  }

  ngOnInit(): void {
    this.visible = (localStorage.getItem('visible') === 'true');

    window.onbeforeunload = () => this.ngOnDestroy();
    
    this.observable$ = this.cabeceraService.getSubject$();
    this.observable$.subscribe(data => {
      if(data.usuario["token"]){
        this.visible = false;
        localStorage.setItem('visible',JSON.stringify(this.visible));
      }else{
        this.visible = true;
        localStorage.setItem('visible',JSON.stringify(this.visible));
      }
    });
  }
}
