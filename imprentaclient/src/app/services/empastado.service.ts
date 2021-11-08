import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class EmpastadoService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/empastado/';
  }

  getEmpastadosById(id: number): Observable<Response>{
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + id, this.httpOptions);
  }

  reservarEmpastado(empastado: any): Observable<Response> {
    return this.http.post<Response>(this.myAppUrl + this.myApiUrl, empastado, this.httpOptions);
  }

  getPrecioEmpastado(): Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + 'api/precioacabado/Empastado', this.httpOptions);
  }

  updatePrecioEmpastado(precioEmpastado: any): Observable<Response> {
    return this.http.put<Response>(this.myAppUrl + 'api/precioacabado/Empastado', precioEmpastado, this.httpOptions);
  }
}
