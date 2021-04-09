import { async, TestBed } from '@angular/core/testing';
import { RazrooProductModule } from './razroo-product.module';

describe('RazrooProductModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RazrooProductModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(RazrooProductModule).toBeDefined();
  });
});
