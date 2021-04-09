import { async, TestBed } from '@angular/core/testing';
import { CommonTypingsModule } from './common-typings.module';

describe('CommonTypingsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonTypingsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonTypingsModule).toBeDefined();
  });
});
