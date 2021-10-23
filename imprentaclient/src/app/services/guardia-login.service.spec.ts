import { TestBed } from '@angular/core/testing';

import { GuardiaLoginService } from './guardia-login.service';

describe('GuardiaLoginService', () => {
  let service: GuardiaLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardiaLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
