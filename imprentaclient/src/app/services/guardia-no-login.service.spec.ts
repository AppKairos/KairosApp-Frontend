import { TestBed } from '@angular/core/testing';

import { GuardiaNoLoginService } from './guardia-no-login.service';

describe('GuardiaNoLoginService', () => {
  let service: GuardiaNoLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardiaNoLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
