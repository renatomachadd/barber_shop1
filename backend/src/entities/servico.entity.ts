import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Entity()
export class Servico {
  @PrimaryGeneratedColumn()
  servico_id: number;

  @Column({ length: 100 })
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
