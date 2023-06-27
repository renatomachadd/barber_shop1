import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { format } from 'date-fns';
@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  findAll(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  async create(clienteDto: CreateClienteDto): Promise<Cliente> {
    const dataAtual = new Date();
    const dataNascimento = new Date(clienteDto.data_nascimento);
    const cpf = clienteDto.cpf;

    if (dataNascimento > dataAtual) {
      throw new HttpException(
        'Data de nascimento inválida. Deve ser anterior à data atual.',
        HttpStatus.BAD_REQUEST,
      );
    }

    const clienteExistente = await this.clienteRepository.findOne({
      where: { cpf },
    });
    if (clienteExistente) {
      throw new ConflictException('CPF já está em uso');
    }

    const cliente = this.clienteRepository.create({
      ...clienteDto,
      data_nascimento: format(dataNascimento, 'yyyy-MM-dd'),
    });

    return this.clienteRepository.save(cliente);
  }

  async atualizarCliente(
    id: number,
    dadosCliente: Partial<Cliente>,
  ): Promise<Cliente> {
    const cliente = await this.clienteRepository.preload({
      cliente_id: id,
      ...dadosCliente,
    });

    if (!cliente) {
      throw new NotFoundException('Cliente não encontrado');
    }

    return this.clienteRepository.save(cliente);
  }

  async excluirCliente(id: number): Promise<void> {
    const cliente = await this.clienteRepository.delete(id);

    if (cliente.affected === 0) {
      throw new NotFoundException('Cliente não encontrado');
    }
  }
}
