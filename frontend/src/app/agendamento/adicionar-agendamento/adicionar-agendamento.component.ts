import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AgendamentoService } from '../../services/agendamento.service';
import { ClienteService } from '../../services/cliente.service';
import { ProfissionaisService } from '../../services/profissionais-service.service';
import { ServicoService } from '../../services/servicos.service';

import { Cliente } from '../../models/cliente.model';
import { Profissional } from '../../models/profissional.model';
import { Servico } from '../../models/servico.model';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ISelecionado } from 'src/app/models/item-selecionado.model';
@Component({
  selector: 'app-adicionar-agendamento',
  templateUrl: './adicionar-agendamento.component.html',
  styleUrls: ['./adicionar-agendamento.component.css'],
})
export class AdicionarAgendamentoComponent implements OnInit {
  form: any = FormGroup;
  servicos: Servico[] = [];
  clientes: Cliente[] = [];
  profissionais: Profissional[] = [];

  clienteSelecionado: ISelecionado = { id: null, nome: '' };
  /* profissionalId: number;
  servicoId: number; */
  constructor(
    private fb: FormBuilder,
    private agendamentoService: AgendamentoService,
    private clienteService: ClienteService,
    private profissionalService: ProfissionaisService,
    private servicoService: ServicoService
  ) {}

  ngOnInit(): void {
    this.carregaFormulario();
    this.buscarServicos();
    this.buscarClientes();
    this.buscarProfissionais();
  }

  carregaFormulario() {
    this.form = this.fb.group({
      cliente: ['', Validators.required],
      profissional: ['', Validators.required],
      servico: ['', Validators.required],
      data: ['', Validators.required],
      horario_inicio: ['', Validators.required],
      horario_fim: ['', Validators.required],
    });
  }

  criaAgendamento() {
    const dados = this.form.value;

    this.agendamentoService.criar(dados).subscribe((dados: any) => {
      alert('Agendamento cadastrado com sucesso!');
      /* this.carregaTabela(); */
      this.form.reset();
    });
  }

  buscarServicos() {
    this.servicoService.listar().subscribe((servicos) => {
      this.servicos = servicos as Servico[];
    });
  }

  buscarClientes() {
    this.clienteService.listar().subscribe((clientes) => {
      this.clientes = clientes as Cliente[];
    });
  }

  buscarProfissionais() {
    this.profissionalService.listar().subscribe((profissionais) => {
      this.profissionais = profissionais as Profissional[];
    });
  }
}
