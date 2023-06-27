import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Cliente } from '../entities/cliente.entity';
import { ClienteService } from '../services/cliente.service';
import { CreateClienteDto } from '../dto/create-cliente.dto';

@Controller('clientes')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
  findAll(): Promise<Cliente[]> {
    return this.clienteService.findAll();
  }

  @Post()
  async createCliente(
    @Body() clientDto: CreateClienteDto,
  ): Promise<{ message: string }> {
    await this.clienteService.create(clientDto);
    return { message: 'Cliente criado com sucesso' };
  }

  @Put(':id')
  async atualizarCliente(
    @Param('id') id: number,
    @Body() dadosCliente: Partial<Cliente>,
  ): Promise<{ message: string }> {
    this.clienteService.atualizarCliente(id, dadosCliente);
    return { message: 'Cliente atualizado com sucesso' };
  }

  @Delete(':id')
  async excluirCliente(@Param('id') id: number): Promise<{ message: string }> {
    await this.clienteService.excluirCliente(id);
    return { message: 'Cliente excluído com sucesso' };
  }
}
