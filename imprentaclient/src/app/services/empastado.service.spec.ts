import { TestBed } from '@angular/core/testing';

import { EmpastadoService } from './empastado.service';

describe('EmpastadoService', () => {
  let service: EmpastadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpastadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
