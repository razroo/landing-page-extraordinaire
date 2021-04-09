import { async, TestBed } from '@angular/core/testing';
import { CommonUiStreetLightModule } from './common-ui-street-light.module';

describe('CommonUiStreetLightModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiStreetLightModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiStreetLightModule).toBeDefined();
  });
});
