import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ServicosComponent } from './servicos/servicos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
const routes: Routes = [
  { path: 'profissional', component: ProfissionalComponent },
  { path: 'cliente', component: ClienteComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: 'agendamentos', component: AgendamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
