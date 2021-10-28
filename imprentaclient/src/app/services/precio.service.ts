import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  myAppUrl: string;
  myApiUrl: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/precio';
  }

  getPreciosAdhesivo():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Adhesivo', this.httpOptions);
  }

  getPreciosBond():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Bond', this.httpOptions);
  }

  getPreciosCartulina():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Cartulina', this.httpOptions);
  }

  getPreciosCartulinaHilada():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Cartulina%20Hilada', this.httpOptions);
  }

  getPreciosCopia():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Copia', this.httpOptions);
  }

  getPreciosCouche():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Couche', this.httpOptions);
  }

  getPreciosDuplex():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Duplex', this.httpOptions);
  }

  getPreciosPapelHueso():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Papel%20Hueso', this.httpOptions);
  }

  getPreciosQuimico():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Químico', this.httpOptions);
  }

  getPreciosSabana():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Sábana', this.httpOptions);
  }

  getPreciosTriplex():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=Triplex', this.httpOptions);
  }

  addPrecio(precio: any):Observable<Response> {
    return this.http.post<Response>(this.myAppUrl + this.myApiUrl + '/', precio, this.httpOptions);
  }

  updatePrecio(id: number, precio: any):Observable<Response> {
    return this.http.put<Response>(this.myAppUrl + this.myApiUrl + '/' + id, precio, this.httpOptions);
  }

  deletePrecio(id: number):Observable<Response> {
    return this.http.delete<Response>(this.myAppUrl + this.myApiUrl + '/' + id, this.httpOptions);
  }

  getNombresPrecios():Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/nombre', this.httpOptions);
  }

  getGramajesTipo(nombre: any):Observable<Response> {
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + '/?nombre=' + nombre, this.httpOptions);
  }
}
