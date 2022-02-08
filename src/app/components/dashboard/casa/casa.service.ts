import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CasaService {
  private url='https://localhost:44363/api/House';


  constructor(private http:HttpClient) { }

  get ():Observable<any> {
    return this.http.get<any>(this.url);
  }
/*
  add(factura:IFacturar):Observable<IResponse>{
      ("HOLA")
    return this.http.post<IResponse>(this.url,factura);
  }

  getDetalle(id: number):Observable<IResponse>{
    return this.http.get<IResponse>(`${this.urlDetalle}/${id}`);
  }

  getBuscarProducto(id: number):Observable<IResponse>{
    return this.http.get<IResponse>(`${this.urlBuscarProducto}/${id}`);// sirve para mandar a buscar el id
  }

  
  getPersona(id: string):Observable<IResponse>{
    return this.http.get<IResponse>(`${this.urlPersona}/${id}`);
  }
*/
}
