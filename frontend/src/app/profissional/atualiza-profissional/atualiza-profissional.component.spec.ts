import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaProfissionalComponent } from './atualiza-profissional.component';

describe('AtualizaProfissionalComponent', () => {
  let component: AtualizaProfissionalComponent;
  let fixture: ComponentFixture<AtualizaProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
