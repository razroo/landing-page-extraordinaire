import { async, TestBed } from '@angular/core/testing';
import { CommonUiTableOfContentsModule } from './common-ui-table-of-contents.module';

describe('CommonUiTableOfContentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiTableOfContentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiTableOfContentsModule).toBeDefined();
  });
});
