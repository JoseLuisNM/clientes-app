import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private baseEndpoint = `${environment.endpointAPI}/clientes`;

  constructor(private http: HttpClient) { }

  public obtenerClientes(): Observable<ICliente[]>{
    return this.http.get<ICliente[]>(this.baseEndpoint);
  }

  public obtenerClientesPorQuery(queryStr: string): Observable<ICliente[]>{
    return this.http.get<ICliente[]>(`${this.baseEndpoint}/search?query=${queryStr}`);
  }

  public eliminarPorId(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }
}
