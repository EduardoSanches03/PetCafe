import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { Adocao } from 'src/app/Model/Adocao';
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AdocoesService {
  apiUrl = 'http://localhost:5000/Adocao';

  constructor(private http: HttpClient) {}
  listar(): Observable<Adocao[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Adocao[]>(url);
  }
  cadastrar(adocao: Adocao): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post(url, adocao, httpOptions);
  }
  alterar(adocao: Adocao): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Adocao>(url, adocao, httpOptions);
  }
  excluir(codigo: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${codigo}`;
    return this.http.delete<number>(url, httpOptions);
  }
}
