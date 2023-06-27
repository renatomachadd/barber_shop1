import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarProfissionalComponent } from './adicionar-profissional.component';

describe('AdicionarProfissionalComponent', () => {
  let component: AdicionarProfissionalComponent;
  let fixture: ComponentFixture<AdicionarProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarProfissionalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
