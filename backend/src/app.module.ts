import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { Servico } from './entities/servico.entity';
import { Profissional } from './entities/profissional.entity';
import { Agendamento } from './entities/agendamento.entity';
import { ClienteService } from './services/cliente.service';
import { ServicoService } from './services/servico.service';
import { ProfissionalService } from './services/profissional.service';
import { AgendamentoService } from './services/agendamento.service';
import { ClienteController } from './controllers/cliente.controller';
import { ServicoController } from './controllers/servico.controller';
import { ProfissionalController } from './controllers/profissional.controller';
import { AgendamentoController } from './controllers/agendamento.controller';
import { dataSourceOptions } from './database/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    TypeOrmModule.forFeature([Cliente, Servico, Profissional, Agendamento]),
  ],
  controllers: [
    ClienteController,
    ServicoController,
    ProfissionalController,
    AgendamentoController,
  ],
  providers: [
    ClienteService,
    ServicoService,
    ProfissionalService,
    AgendamentoService,
  ],
})
export class AppModule {}
