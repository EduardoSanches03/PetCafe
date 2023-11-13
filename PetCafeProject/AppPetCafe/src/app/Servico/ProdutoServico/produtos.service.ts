import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Produto } from 'src/app/Model/Produto'; 
import { catchError } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

const httpOptions = {headers: new HttpHeaders({'Content-Type' : 'application/json'}
)}

@Injectable({
    providedIn: 'root'
})

export class ProdutosService {
apiUrl = 'http://localhost:5000/Produto';

constructor(private http: HttpClient) { }
listar(): Observable<Produto[]> {const url = `${this.apiUrl}/listar`;
return this.http.get<Produto[]>(url);
}
buscar(codigo: string): Observable<Produto> {const url = `${this.apiUrl}/buscar/${codigo}`;
return this.http.get<Produto>(url);
}
cadastrarProduto(produto: Produto): Observable<any> {
    const url = `${this.apiUrl}/Cadastrar`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  
    return this.http.post(url, produto, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Erro:', error.error.message);
    } else {
      console.error(`Código de erro ${error.status}, ` + `mensagem: ${JSON.stringify(error.error)}`);
    }
  
    return throwError('Algo deu errado; por favor, tente novamente mais tarde.');
  }
  
  
alterar(produto: Produto): Observable<any> {const url = `${this.apiUrl}/alterar`;
return this.http.put<Produto>(url, produto, httpOptions);
}
excluir(codigo: string): Observable<any> {const url = `${this.apiUrl}/buscar/${codigo}`;
return this.http.delete<string>(url, httpOptions);
}}