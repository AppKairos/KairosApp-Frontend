import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/reserva/';
  }

  getReservasEmpastados(): Observable<Response>{
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '?nombre=Empastado', this.httpOptions);
  }
  getEmpastadosReservas(): Observable<Response>{
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + 'empastados', this.httpOptions);
  }
}
