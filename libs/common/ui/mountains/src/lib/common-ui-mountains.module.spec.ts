import { async, TestBed } from '@angular/core/testing';
import { CommonUiMountainsModule } from './common-ui-mountains.module';

describe('CommonUiMountainsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiMountainsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiMountainsModule).toBeDefined();
  });
});
