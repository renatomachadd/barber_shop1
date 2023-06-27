import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Servico } from '../entities/servico.entity';
import { ServicoService } from '../services/servico.service';
import { CreateServicoDto } from '../dto/create-servico.dto';

@Controller('servicos')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Get()
  findAll(): Promise<Servico[]> {
    return this.servicoService.findAll();
  }

  @Post()
  create(@Body() servicoDto: CreateServicoDto): Promise<Servico> {
    const servico = new Servico();
    servico.descricao = servicoDto.descricao;
    servico.valor = servicoDto.valor;
    return this.servicoService.create(servico);
  }

  @Put(':id')
  async atualizarServico(
    @Param('id') id: number,
    @Body() dadosServico: Partial<Servico>,
  ): Promise<{ message: string }> {
    this.servicoService.atualizarServico(id, dadosServico);
    return { message: 'Servico atualizado com sucesso' };
  }

  @Delete(':id')
  async excluirServico(@Param('id') id: number): Promise<{ message: string }> {
    await this.servicoService.excluirServico(id);
    return { message: 'Servico excluído com sucesso' };
  }
}
