import {
  IsNotEmpty,
  IsString,
  IsDate,
  Length,
  IsDateString,
} from 'class-validator';

export class CreateProfissionalDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @Length(11, 14)
  cpf: string;

  @IsNotEmpty()
  @IsString()
  telefone: string;

  @IsNotEmpty()
  @IsDateString()
  data_nascimento: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsString()
  numero: string;

  @IsNotEmpty()
  @IsString()
  cidade: string;

  @IsNotEmpty()
  @Length(8, 10)
  cep: string;

  @IsNotEmpty()
  @IsString()
  estado: string;
}
