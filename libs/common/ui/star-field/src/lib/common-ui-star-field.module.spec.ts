import { async, TestBed } from '@angular/core/testing';
import { CommonUiStarFieldModule } from './common-ui-star-field.module';

describe('CommonUiStarFieldModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiStarFieldModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiStarFieldModule).toBeDefined();
  });
});
