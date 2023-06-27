import { Cliente } from './cliente.model';
import { Profissional } from './profissional.model';
import { Servico } from './servico.model';

export interface Agendamento {
  agendamento_id: number;
  cliente: Cliente;
  profissional: Profissional;
  servico: Servico;
  data: string;
  horario_inicio: string;
  horario_fim: string;
}
