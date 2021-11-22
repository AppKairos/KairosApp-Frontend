import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class CabeceraService {

  private subjectVisible$ = new Subject<any>();

  constructor() { }

  getSubject$(): Observable<any> {
    return this.subjectVisible$.asObservable();
  }

  storeUser(usuario: any){
    localStorage.removeItem('usuario');
    localStorage.setItem('usuario',JSON.stringify(usuario));
    this.subjectVisible$.next({usuario: usuario});
  }
}
