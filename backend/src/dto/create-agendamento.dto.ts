import {
  IsNotEmpty,
  IsDate,
  IsString,
  IsTimeZone,
  IsDateString,
} from 'class-validator';
import { Cliente } from '../entities/cliente.entity';
import { Profissional } from '../entities/profissional.entity';
import { Servico } from '../entities/servico.entity';

export class CreateAgendamentoDto {
  @IsNotEmpty()
  cliente: Cliente;

  @IsNotEmpty()
  profissional: Profissional;

  @IsNotEmpty()
  servico: Servico;

  @IsNotEmpty()
  @IsDateString()
  data: string;

  @IsNotEmpty()
  @IsString()
  horario_inicio: string;

  @IsNotEmpty()
  @IsString()
  horario_fim: string;
}
