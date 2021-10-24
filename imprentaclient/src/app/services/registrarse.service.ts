import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class RegistrarseService {

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/auth/';
  }

  registrarse(usuarioRegistrarse: any): Observable<Response>{
    return this.http.post<Response>(this.myAppUrl + this.myApiUrl + 'register', usuarioRegistrarse, this.httpOptions);
  }

  registrarseGoogle(usuarioRegistrarseGoogle: any): Observable<Response>{
    console.log(usuarioRegistrarseGoogle);
    return this.http.post<Response>(this.myAppUrl + this.myApiUrl + 'register/gmail', usuarioRegistrarseGoogle, this.httpOptions);
  }
}
