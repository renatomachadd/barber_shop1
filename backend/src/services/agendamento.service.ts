import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Agendamento } from '../entities/agendamento.entity';
import { CreateAgendamentoDto } from '../dto/create-agendamento.dto';
import { format } from 'date-fns';
@Injectable()
export class AgendamentoService {
  constructor(
    @InjectRepository(Agendamento)
    private readonly agendamentoRepository: Repository<Agendamento>,
  ) {}

  findAll(): Promise<Agendamento[]> {
    return this.agendamentoRepository.find({
      relations: ['cliente', 'profissional', 'servico'],
    });
  }

  /*  create(agendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    const agendamento = this.agendamentoRepository.create(agendamentoDto);
    return this.agendamentoRepository.save(agendamento);
  } */

  async create(agendamentoDto: CreateAgendamentoDto): Promise<Agendamento> {
    const dataAtual = new Date();
    const dataAgendamento = new Date(agendamentoDto.data);

    if (dataAgendamento < dataAtual) {
      throw new NotFoundException(
        'Data de agendamento inválida. Deve ser posterior à data atual.',
      );
    }
    const agendamento = this.agendamentoRepository.create({
      ...agendamentoDto,
      data: format(dataAgendamento, 'yyyy-MM-dd'),
    });
    return this.agendamentoRepository.save(agendamento);
  }
  async atualizarAgendamento(
    id: number,
    dadosAgendamento: Partial<Agendamento>,
  ): Promise<Agendamento> {
    const agendamento = await this.agendamentoRepository.preload({
      agendamento_id: id,
      ...dadosAgendamento,
    });

    if (!agendamento) {
      throw new NotFoundException('Agendamento não encontrado');
    }

    return this.agendamentoRepository.save(agendamento);
  }

  async excluirAgendamento(id: number): Promise<void> {
    const cliente = await this.agendamentoRepository.delete(id);

    if (cliente.affected === 0) {
      throw new NotFoundException('Agendamento não encontrado');
    }
  }
}
