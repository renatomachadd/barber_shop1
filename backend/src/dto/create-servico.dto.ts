import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateServicoDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
