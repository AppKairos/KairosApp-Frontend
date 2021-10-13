import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/Producto';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class AfichesService {

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/afiches/';
  }

  cotizarAfiche(afiche: any): Observable<Response>{
    return this.http.post<Response>(this.myAppUrl + this.myApiUrl + 'cotizar', afiche, this.httpOptions);
  }
}
