import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ServicoService } from '../../services/servicos.service';
@Component({
  selector: 'app-atualiza-servico',
  templateUrl: './atualiza-servico.component.html',
  styleUrls: ['./atualiza-servico.component.css'],
})
export class AtualizaServicoComponent implements OnInit {
  form: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private servicoService: ServicoService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.carregarFormulario();
  }

  carregarFormulario() {
    this.form = this.fb.group({
      descricao: [this.data.descricao, Validators.required],
      valor: [this.data.valor, Validators.required],
    });
  }

  atualizar() {
    const id = this.data.servico_id;
    this.form.value.servico_id = this.data.servico_id;
    this.servicoService.atualizar(id, this.form.value).subscribe((dados) => {
      alert('Serviço atualizado com sucesso!');
      this.dialog.closeAll();
    });
  }
}
