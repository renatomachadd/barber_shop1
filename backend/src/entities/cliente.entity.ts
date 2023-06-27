import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import {
  IsNotEmpty,
  IsString,
  IsDate,
  Length,
  IsDateString,
} from 'class-validator';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  cliente_id: number;

  @Column({ length: 100 })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @Column({ length: 14 })
  @IsNotEmpty()
  @Length(11, 14)
  cpf: string;

  @Column({ length: 20 })
  @IsNotEmpty()
  @IsString()
  telefone: string;

  @Column({ type: 'date' })
  @IsNotEmpty()
  data_nascimento: string;

  @Column({ length: 100 })
  @IsNotEmpty()
  @IsString()
  endereco: string;

  @Column({ length: 10 })
  @IsString()
  numero: string;

  @Column({ length: 50 })
  @IsNotEmpty()
  @IsString()
  cidade: string;

  @Column({ length: 10 })
  @IsNotEmpty()
  @IsString()
  @Length(8, 10)
  cep: string;

  @Column({ length: 50 })
  @IsNotEmpty()
  @IsString()
  estado: string;
}
