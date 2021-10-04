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
export class ProductoService {

  myAppUrl: string;
  myApiUrl: string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8'
    })
  }

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.appUrl;
    this.myApiUrl = 'api/producto/';
  }

  getProductos(): Observable<Response>{
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl);
  }

  getProducto(idProducto: number): Observable<Response>{
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + idProducto);
  }

  updateProducto(producto: Producto): Observable<Response>{
    fetch(this.myAppUrl + this.myApiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl + producto.id);
  }

  deleteProducto(idProducto: number): Observable<Response>{
    fetch(this.myAppUrl + this.myApiUrl + idProducto, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      }
    });   
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl);
  }

  createProducto(producto: Producto): Observable<Response>{
    fetch(this.myAppUrl + this.myApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(producto),
    });    
    return this.http.get<Response>(this.myAppUrl + this.myApiUrl);
  }

}
