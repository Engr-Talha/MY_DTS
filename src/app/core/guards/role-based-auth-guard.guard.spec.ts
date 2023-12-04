import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleBasedAuthGuardGuard } from './role-based-auth-guard.guard';

describe('roleBasedAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleBasedAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
