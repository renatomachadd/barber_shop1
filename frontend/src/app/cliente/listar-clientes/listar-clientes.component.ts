import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ClienteService } from '../../services/cliente.service';

import { MatDialog } from '@angular/material/dialog';

import { AtualizaClienteComponent } from '../atualiza-cliente/atualiza-cliente.component';
@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],
})
export class ListarClientesComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = [
    'cliente_id',
    'nome',
    'cpf',
    'telefone',
    'data_nascimento',
    'endereco',
    'numero',
    'cidade',
    'cep',
    'estado',
    'acoes',
  ];

  constructor(
    private http: HttpClient,
    private clienteService: ClienteService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.clienteService.listar().subscribe((dados: any) => {
      this.dataSource.data = dados;
    });
  }
  excluir(id: number) {
    this.clienteService.excluir(id).subscribe((dados: any) => {
      alert('Cliente excluído com sucesso!');
    });
  }
  editar(cliente: any) {
    console.log(cliente);
    const dialogRef = this.dialog.open(AtualizaClienteComponent, {
      width: '450px',
      data: cliente,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.listar();
    });
  }
}
