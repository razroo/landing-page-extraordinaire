import { async, TestBed } from '@angular/core/testing';
import { CommonUiBgModule } from './common-ui-bg.module';

describe('CommonUiBgModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiBgModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiBgModule).toBeDefined();
  });
});
