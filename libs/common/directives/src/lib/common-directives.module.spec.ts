import { async, TestBed } from '@angular/core/testing';
import { CommonDirectivesModule } from './common-directives.module';

describe('CommonDirectivesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonDirectivesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonDirectivesModule).toBeDefined();
  });
});
