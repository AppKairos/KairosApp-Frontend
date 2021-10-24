import { TestBed } from '@angular/core/testing';

import { GuardiaAdminService } from './guardia-admin.service';

describe('GuardiaAdminService', () => {
  let service: GuardiaAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuardiaAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
