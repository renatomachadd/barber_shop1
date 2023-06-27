import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAgendamentoComponent } from './listar-agendamento.component';

describe('ListarAgendamentoComponent', () => {
  let component: ListarAgendamentoComponent;
  let fixture: ComponentFixture<ListarAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
