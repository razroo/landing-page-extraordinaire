import { TestBed } from '@angular/core/testing';

import { CustomRouteSerializingService } from './custom-route-serializing.service';

describe('CustomRouteSerializingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomRouteSerializingService = TestBed.get(CustomRouteSerializingService);
    expect(service).toBeTruthy();
  });
});
