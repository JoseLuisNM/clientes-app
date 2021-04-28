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

  public obtenerPorId(id: number): Observable<ICliente>{
    return this.http.get<ICliente>(`${this.baseEndpoint}/${id}`);
  }

  public obtenerClientesPorQuery(queryStr: string): Observable<ICliente[]>{
    return this.http.get<ICliente[]>(`${this.baseEndpoint}/search?query=${queryStr}`);
  }

  public crearCliente(cliente: ICliente): Observable<ICliente> {
    return this.http.post<ICliente>(this.baseEndpoint, cliente);
  }

  public eliminarPorId(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}
