import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fornecedor } from 'src/app/Model/Fornecedor';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class FornecedoresService {
  apiUrl = 'http://localhost:5000';
  constructor(private http: HttpClient) {
    Fornecedor;
  }
  listar(): Observable<Fornecedor[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Fornecedor[]>(url);
  }
  cadastrar(fornecedor: Fornecedor): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post(url, fornecedor, httpOptions);
  }
  alterar(fornecedor: Fornecedor): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Fornecedor>(url, fornecedor, httpOptions);
  }
  excluir(cnpj: string): Observable<any> {
    const url = `${this.apiUrl}/excluir/${cnpj}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
