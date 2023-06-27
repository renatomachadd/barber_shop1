import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaClienteComponent } from './atualiza-cliente.component';

describe('AtualizaClienteComponent', () => {
  let component: AtualizaClienteComponent;
  let fixture: ComponentFixture<AtualizaClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
