import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticleRainComponent } from './particle-rain.component';

describe('ParticleRainComponent', () => {
  let component: ParticleRainComponent;
  let fixture: ComponentFixture<ParticleRainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticleRainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticleRainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
