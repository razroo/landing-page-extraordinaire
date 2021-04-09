import { async, TestBed } from '@angular/core/testing';
import { CommonUiRocketShipModule } from './common-ui-rocket-ship.module';

describe('CommonUiRocketShipModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiRocketShipModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiRocketShipModule).toBeDefined();
  });
});
