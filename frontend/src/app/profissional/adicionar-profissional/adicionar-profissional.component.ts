import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfissionaisService } from '../../services/profissionais-service.service';
@Component({
  selector: 'app-adicionar-profissional',
  templateUrl: './adicionar-profissional.component.html',
  styleUrls: ['./adicionar-profissional.component.css'],
})
export class AdicionarProfissionalComponent implements OnInit {
  form: any;
  constructor(
    private fb: FormBuilder,
    private profissionalService: ProfissionaisService
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

  criaProfissional() {
    const dados = this.form.value;

    this.profissionalService.criar(dados).subscribe((dados: any) => {
      alert('Profissional cadastrado com sucesso!');
      this.carregaTabela();
      this.form.reset();
    });
  }

  carregaTabela() {
    this.profissionalService.listar();
  }
}
