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

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/auth/registrarse';
  }

  registrarse(newUsuario: Usuario): Observable<Response>{
    fetch(this.myAppUrl + this.myApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUsuario),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl);
  }
}
