import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Profissional } from '../entities/profissional.entity';
import { ProfissionalService } from '../services/profissional.service';
import { CreateProfissionalDto } from '../dto/create-profissional.dto';

@Controller('profissionais')
export class ProfissionalController {
  constructor(private readonly profissionalService: ProfissionalService) {}

  @Get()
  findAll(): Promise<Profissional[]> {
    return this.profissionalService.findAll();
  }

  @Post()
  create(
    @Body() profissionalDto: CreateProfissionalDto,
  ): Promise<Profissional> {
    const profissional = new Profissional();
    profissional.nome = profissionalDto.nome;
    profissional.cpf = profissionalDto.cpf;
    profissional.telefone = profissionalDto.telefone;
    profissional.data_nascimento = profissionalDto.data_nascimento;
    profissional.endereco = profissionalDto.endereco;
    profissional.numero = profissionalDto.numero;
    profissional.cidade = profissionalDto.cidade;
    profissional.cep = profissionalDto.cep;
    profissional.estado = profissionalDto.estado;
    return this.profissionalService.create(profissional);
  }

  @Put(':id')
  async atualizarProfissional(
    @Param('id') id: number,
    @Body() dadosProfissional: Partial<Profissional>,
  ): Promise<{ message: string }> {
    this.profissionalService.atualizarProfissional(id, dadosProfissional);
    return { message: 'Profissional atualizado com sucesso' };
  }

  @Delete(':id')
  async excluirCliente(@Param('id') id: number): Promise<{ message: string }> {
    await this.profissionalService.excluirprofissional(id);
    return { message: 'Profissional excluído com sucesso' };
  }
}
