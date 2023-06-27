import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Servico } from '../entities/servico.entity';
import { CreateServicoDto } from '../dto/create-servico.dto';

@Injectable()
export class ServicoService {
  constructor(
    @InjectRepository(Servico)
    private readonly servicoRepository: Repository<Servico>,
  ) {}

  findAll(): Promise<Servico[]> {
    return this.servicoRepository.find();
  }

  create(servicoDto: CreateServicoDto): Promise<Servico> {
    const servico = this.servicoRepository.create(servicoDto);
    return this.servicoRepository.save(servico);
  }

  async atualizarServico(
    id: number,
    dadosServico: Partial<Servico>,
  ): Promise<Servico> {
    const servico = await this.servicoRepository.preload({
      servico_id: id,
      ...dadosServico,
    });

    if (!servico) {
      throw new NotFoundException('Servico não encontrado');
    }

    return this.servicoRepository.save(servico);
  }

  async excluirServico(id: number): Promise<void> {
    const cliente = await this.servicoRepository.delete(id);

    if (cliente.affected === 0) {
      throw new NotFoundException('Servico não encontrado');
    }
  }
}
