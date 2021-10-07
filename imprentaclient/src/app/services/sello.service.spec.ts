import { TestBed } from '@angular/core/testing';

import { SelloService } from './sello.service';

describe('SelloService', () => {
  let service: SelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
