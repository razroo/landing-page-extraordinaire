import { async, TestBed } from '@angular/core/testing';
import { CommonUiHangingLightModule } from './common-ui-hanging-light.module';

describe('CommonUiHangingLightModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiHangingLightModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiHangingLightModule).toBeDefined();
  });
});
