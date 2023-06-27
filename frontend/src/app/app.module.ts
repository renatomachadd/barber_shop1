import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfissionalComponent } from './profissional/profissional.component';
import { HeaderComponent } from './components/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ServicosComponent } from './servicos/servicos.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import {
  MatFormFieldModule,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdicionarProfissionalComponent } from './profissional/adicionar-profissional/adicionar-profissional.component';
import { ListarProfissionalComponent } from './profissional/listar-profissional/listar-profissional.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AtualizaProfissionalComponent } from './profissional/atualiza-profissional/atualiza-profissional.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClienteComponent } from './cliente/cliente.component';
import { ListarClientesComponent } from './cliente/listar-clientes/listar-clientes.component';
import { AdicionarClienteComponent } from './cliente/adicionar-cliente/adicionar-cliente.component';
import { AtualizaClienteComponent } from './cliente/atualiza-cliente/atualiza-cliente.component';
import { ListarServicosComponent } from './servicos/listar-servicos/listar-servicos.component';
import { AdicionarServicoComponent } from './servicos/adicionar-servico/adicionar-servico.component';
import { AtualizaServicoComponent } from './servicos/atualiza-servico/atualiza-servico.component';
import { ListarAgendamentoComponent } from './agendamento/listar-agendamento/listar-agendamento.component';
import { AdicionarAgendamentoComponent } from './agendamento/adicionar-agendamento/adicionar-agendamento.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    HeaderComponent,
    ServicosComponent,
    AgendamentoComponent,
    AdicionarProfissionalComponent,
    ListarProfissionalComponent,
    AtualizaProfissionalComponent,
    ClienteComponent,
    ListarClientesComponent,
    AdicionarClienteComponent,
    AtualizaClienteComponent,
    ListarServicosComponent,
    AdicionarServicoComponent,
    AtualizaServicoComponent,
    ListarAgendamentoComponent,
    AdicionarAgendamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatSnackBarModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
