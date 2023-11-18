import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Produto } from 'src/app/Model/Produto';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  apiUrl = 'http://localhost:5000/Produto';

  constructor(private http: HttpClient) {}
  listar(): Observable<Produto[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Produto[]>(url);
  }
  cadastrar(produto: Produto): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post(url, produto, httpOptions);
  }
  alterar(produto: Produto): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Produto>(url, produto, httpOptions);
  }
  excluir(codigo: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${codigo}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
