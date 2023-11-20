import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../../Model/Animal';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  apiUrl = 'http://localhost:5000/Animal';
  constructor(private http: HttpClient) {
    Animal;
  }
  listar(): Observable<Animal[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Animal[]>(url);
  }
  cadastrar(animal: Animal): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post(url, animal, httpOptions);
  }
  alterar(animal: Animal): Observable<any> {
    const url = `${this.apiUrl}/alterar`;
    return this.http.put<Animal>(url, animal, httpOptions);
  }
  excluir(id: number): Observable<any> {
    const url = `${this.apiUrl}/excluir/${id}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
