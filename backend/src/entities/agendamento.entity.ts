import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { IsNotEmpty, IsDate, IsString, IsTimeZone } from 'class-validator';
import { Cliente } from './cliente.entity';
import { Profissional } from './profissional.entity';
import { Servico } from './servico.entity';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  agendamento_id: number;

  @ManyToOne(() => Cliente)
  @IsNotEmpty()
  cliente: Cliente;

  @ManyToOne(() => Profissional)
  @IsNotEmpty()
  profissional: Profissional;

  @ManyToOne(() => Servico)
  @IsNotEmpty()
  servico: Servico;

  @Column('date')
  @IsNotEmpty()
  data: string;

  @Column('time')
  @IsNotEmpty()
  @IsString()
  horario_inicio: string;

  @Column('time')
  @IsNotEmpty()
  @IsString()
  horario_fim: string;
}
