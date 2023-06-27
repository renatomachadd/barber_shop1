import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { ClienteModule } from './modules/cliente.module';
import { ServicoModule } from './modules/servico.module';
import { ProfissionalModule } from './modules/profissional.module';
import { AgendamentoModule } from './modules/agendamento.module';

const routes: Routes = [
  {
    path: '/clientes',
    module: ClienteModule,
  },
  {
    path: '/servicos',
    module: ServicoModule,
  },
  {
    path: '/profissionais',
    module: ProfissionalModule,
  },
  {
    path: '/agendamentos',
    module: AgendamentoModule,
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ClienteModule,
    ServicoModule,
    ProfissionalModule,
    AgendamentoModule,
  ],
})
export class AppRoutesModule {}
