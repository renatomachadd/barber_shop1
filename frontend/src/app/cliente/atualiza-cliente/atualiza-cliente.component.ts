import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from '../../services/cliente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-atualiza-cliente',
  templateUrl: './atualiza-cliente.component.html',
  styleUrls: ['./atualiza-cliente.component.css'],
})
export class AtualizaClienteComponent implements OnInit {
  form: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
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
    const id = this.data.cliente_id;
    this.form.value.cliente_id = this.data.cliente_id;
    this.clienteService.atualizar(id, this.form.value).subscribe((dados) => {
      alert('Cliente atualizado com sucesso!');
      this.dialog.closeAll();
    });
  }
}
