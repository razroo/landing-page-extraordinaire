import { async, TestBed } from '@angular/core/testing';
import { CommonUiParticlesModule } from './common-ui-particles.module';

describe('CommonUiParticlesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonUiParticlesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonUiParticlesModule).toBeDefined();
  });
});
