import { TestBed } from '@angular/core/testing';

import { ProfissionaisServiceService } from './profissionais-service.service';

describe('ProfissionaisServiceService', () => {
  let service: ProfissionaisServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfissionaisServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
