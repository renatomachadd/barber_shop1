import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfissionaisService } from '../../services/profissionais-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-atualiza-profissional',
  templateUrl: './atualiza-profissional.component.html',
  styleUrls: ['./atualiza-profissional.component.css'],
})
export class AtualizaProfissionalComponent implements OnInit {
  form: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private profissionalService: ProfissionaisService,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.carregarFormulario();
  }

  carregarFormulario() {
    this.form = this.fb.group({
      nome: [this.data.nome],
      cpf: [this.data.cpf],
      telefone: [this.data.telefone],
      data_nascimento: [this.data.data_nascimento],
      endereco: [this.data.endereco],
      numero: [this.data.numero],
      cidade: [this.data.cidade],
      cep: [this.data.cep],
      estado: [this.data.estado],
    });
  }

  atualizar() {
    const id = this.data.profissional_id;
    this.form.value.profissional_id = this.data.profissional_id;
    this.profissionalService
      .atualizar(id, this.form.value)
      .subscribe((dados) => {
        alert('Profissional atualizado com sucesso!');
        this.dialog.closeAll();
      });
  }
}
