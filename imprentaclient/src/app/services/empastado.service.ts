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
}
