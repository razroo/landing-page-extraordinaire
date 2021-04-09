import { async, TestBed } from '@angular/core/testing';
import { CommonUiLakeModule } from './common-ui-lake.module';

describe('CommonUiLakeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiLakeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiLakeModule).toBeDefined();
  });
});
