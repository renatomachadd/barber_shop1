import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private url = 'http://localhost:3000/clientes';
  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get(`${this.url}`);
  }

  criar(dados: any) {
    return this.http.post(`${this.url}`, dados);
  }

  atualizar(id: number, dados: any) {
    return this.http.put(`${this.url}/${id}`, dados);
  }

  excluir(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
