import { TestBed } from '@angular/core/testing';

import { CanactiveGuard } from './canactive.guard';

describe('CanactiveGuard', () => {
  let guard: CanactiveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanactiveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
