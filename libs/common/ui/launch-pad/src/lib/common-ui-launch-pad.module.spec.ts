import { async, TestBed } from '@angular/core/testing';
import { CommonUiLaunchPadModule } from './common-ui-launch-pad.module';

describe('CommonUiLaunchPadModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiLaunchPadModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiLaunchPadModule).toBeDefined();
  });
});
