import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './Cliente';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  apiUrl = 'http://localhost:5000/Cliente';
  constructor(private http: HttpClient) {}

  listar(): Observable<Cliente[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Cliente[]>(url);
  }
  cadastrar(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Cliente>(url, cliente, HttpOptions);
  }
  atualizar(cliente: Cliente): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Cliente>(url, cliente, HttpOptions);
  }
  excluir(cpf: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${cpf}`;
    return this.http.delete<string>(url, HttpOptions);
  }
}
