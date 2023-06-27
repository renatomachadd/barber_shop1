import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ProfissionaisService } from '../../services/profissionais-service.service';

import { MatDialog } from '@angular/material/dialog';
import { AtualizaProfissionalComponent } from '../atualiza-profissional/atualiza-profissional.component';

@Component({
  selector: 'app-listar-profissional',
  templateUrl: './listar-profissional.component.html',
  styleUrls: ['./listar-profissional.component.css'],
})
export class ListarProfissionalComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();

  displayedColumns: string[] = [
    'profissional_id',
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
    private profissionaisService: ProfissionaisService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.profissionaisService.listar().subscribe((dados: any) => {
      this.dataSource.data = dados;
    });
  }
  excluir(id: number) {
    this.profissionaisService.excluir(id).subscribe((dados: any) => {
      alert('Profissional excluído com sucesso!');
    });
  }
  editar(profissional: any) {
    console.log(profissional);
    const dialogRef = this.dialog.open(AtualizaProfissionalComponent, {
      width: '450px',
      data: profissional,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.listar();
    });
  }
}
