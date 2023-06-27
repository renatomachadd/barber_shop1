import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { ServicoService } from '../../services/servicos.service';
import { MatDialog } from '@angular/material/dialog';
import { AtualizaServicoComponent } from '../atualiza-servico/atualiza-servico.component';
@Component({
  selector: 'app-listar-servicos',
  templateUrl: './listar-servicos.component.html',
  styleUrls: ['./listar-servicos.component.css'],
})
export class ListarServicosComponent implements OnInit {
  dataSource = new MatTableDataSource<any>();
  title = 'Listar Serviços';

  displayedColumns: string[] = ['servico_id', 'descricao', 'valor', 'acoes'];
  constructor(
    private http: HttpClient,
    private servicoService: ServicoService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.listar();
  }

  listar() {
    this.servicoService.listar().subscribe((dados: any) => {
      this.dataSource.data = dados;
    });
  }
  excluir(id: number) {
    this.servicoService.excluir(id).subscribe((dados: any) => {
      alert('Serviço excluído com sucesso!');
    });
  }
  editar(servico: any) {
    console.log(servico);
    const dialogRef = this.dialog.open(AtualizaServicoComponent, {
      width: '550px',
      data: servico,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.listar();
    });
  }
}
