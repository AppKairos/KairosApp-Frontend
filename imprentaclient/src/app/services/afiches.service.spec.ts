import { TestBed } from '@angular/core/testing';

import { AfichesService } from './afiches.service';

describe('AfichesService', () => {
  let service: AfichesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AfichesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
