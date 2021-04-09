import { TestBed } from '@angular/core/testing';

import { OnDemandPreloadService } from './on-demand-preload.service';

describe('OnDemandPreloadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OnDemandPreloadService = TestBed.get(OnDemandPreloadService);
    expect(service).toBeTruthy();
  });
});
