import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { AgendamentoService } from '../../services/agendamento.service';

import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-agendamento',
  templateUrl: './listar-agendamento.component.html',
  styleUrls: ['./listar-agendamento.component.css'],
})
export class ListarAgendamentoComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = [
    'agendamento_id',
    'data',
    'horario_inicio',
    'horario_fim',
    'cliente',
    'servico',
    'profissional',
    'acoes',
  ];

  constructor(
    private http: HttpClient,
    private agendamentoService: AgendamentoService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.agendamentoService.listar().subscribe((dados: any) => {
      this.dataSource.data = dados;
    });
  }
  excluir(id: number) {
    this.agendamentoService.excluir(id).subscribe((dados: any) => {
      alert('Agendamento excluído com sucesso!');
    });
  }
  editar(agendamento: any) {}
}
