import { async, TestBed } from '@angular/core/testing';
import { CommonStylesModule } from './common-styles.module';

describe('CommonStylesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonStylesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonStylesModule).toBeDefined();
  });
});
