import { async, TestBed } from '@angular/core/testing';
import { CommonUiShelfModule } from './common-ui-shelf.module';

describe('CommonUiShelfModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiShelfModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiShelfModule).toBeDefined();
  });
});
