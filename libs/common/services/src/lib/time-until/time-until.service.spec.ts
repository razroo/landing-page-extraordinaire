import { TestBed } from '@angular/core/testing';

import { TimeUntilService } from './time-until.service';

describe('TimeUntilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TimeUntilService = TestBed.get(TimeUntilService);
    expect(service).toBeTruthy();
  });
});
