import { async, TestBed } from '@angular/core/testing';
import { CommonUiFactoryModule } from './common-ui-factory.module';

describe('CommonUiFactoryModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiFactoryModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiFactoryModule).toBeDefined();
  });
});
