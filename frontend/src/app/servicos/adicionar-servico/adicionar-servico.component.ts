import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicoService } from '../../services/servicos.service';

@Component({
  selector: 'app-adicionar-servico',
  templateUrl: './adicionar-servico.component.html',
  styleUrls: ['./adicionar-servico.component.css'],
})
export class AdicionarServicoComponent implements OnInit {
  form: any = FormGroup;
  constructor(
    private fb: FormBuilder,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    this.carregaFormulario();
  }

  carregaFormulario() {
    this.form = this.fb.group({
      descricao: ['', Validators.required],
      valor: ['', Validators.required],
    });
  }

  criaServico() {
    const dados = this.form.value;
    dados.valor = parseFloat(dados.valor);

    this.servicoService.criar(dados).subscribe((dados: any) => {
      alert('Serviço cadastrado com sucesso!');
      /* this.carregaTabela(); */
      this.form.reset();
    });
  }
}
