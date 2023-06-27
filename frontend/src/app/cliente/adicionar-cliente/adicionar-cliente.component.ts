import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
@Component({
  selector: 'app-adicionar-cliente',
  templateUrl: './adicionar-cliente.component.html',
  styleUrls: ['./adicionar-cliente.component.css'],
})
export class AdicionarClienteComponent implements OnInit {
  form: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.carregaFormulario();
  }

  carregaFormulario() {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      telefone: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      cidade: ['', Validators.required],
      cep: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  criaCliente() {
    const dados = this.form.value;

    this.clienteService.criar(dados).subscribe((dados: any) => {
      alert('Cliente cadastrado com sucesso!');
      /* this.carregaTabela(); */
      this.form.reset();
    });
  }
}
