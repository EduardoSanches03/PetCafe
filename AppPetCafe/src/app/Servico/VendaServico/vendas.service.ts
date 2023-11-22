import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Venda } from 'src/app/Model/Venda';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class VendasService {
  apiUrl = 'http://localhost:5000/Venda';

  constructor(private http: HttpClient) {}
  listar(): Observable<Venda[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Venda[]>(url);
  }
  cadastrar(venda: Venda): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post(url, venda, httpOptions);
  }
  alterar(venda: Venda): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Venda>(url, venda, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${id}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
