import { async, TestBed } from '@angular/core/testing';
import { CommonUiSubmarineModule } from './common-ui-submarine.module';

describe('CommonUiSubmarineModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiSubmarineModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiSubmarineModule).toBeDefined();
  });
});
