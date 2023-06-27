import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Agendamento } from '../entities/agendamento.entity';
import { AgendamentoService } from '../services/agendamento.service';
import { CreateAgendamentoDto } from '../dto/create-agendamento.dto';

@Controller('agendamentos')
export class AgendamentoController {
  constructor(private readonly agendamentoService: AgendamentoService) {}

  @Get()
  findAll(): Promise<Agendamento[]> {
    return this.agendamentoService.findAll();
  }

  @Post()
  create(@Body() agendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    const agendamento = new Agendamento();
    agendamento.cliente = agendamentoDto.cliente;
    agendamento.profissional = agendamentoDto.profissional;
    agendamento.servico = agendamentoDto.servico;
    agendamento.data = agendamentoDto.data;
    agendamento.horario_inicio = agendamentoDto.horario_inicio;
    agendamento.horario_fim = agendamentoDto.horario_fim;
    return this.agendamentoService.create(agendamento);
  }

  @Put(':id')
  async atualizarAgendamento(
    @Param('id') id: number,
    @Body() dadosAgendamento: Partial<Agendamento>,
  ): Promise<{ message: string }> {
    this.agendamentoService.atualizarAgendamento(id, dadosAgendamento);
    return { message: 'Agendamento atualizado com sucesso' };
  }

  @Delete(':id')
  async excluirAgendamento(
    @Param('id') id: number,
  ): Promise<{ message: string }> {
    await this.agendamentoService.excluirAgendamento(id);
    return { message: 'Agendamento excluído com sucesso' };
  }
}
