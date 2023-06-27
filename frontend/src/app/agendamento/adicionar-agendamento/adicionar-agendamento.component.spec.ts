import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarAgendamentoComponent } from './adicionar-agendamento.component';

describe('AdicionarAgendamentoComponent', () => {
  let component: AdicionarAgendamentoComponent;
  let fixture: ComponentFixture<AdicionarAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarAgendamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
