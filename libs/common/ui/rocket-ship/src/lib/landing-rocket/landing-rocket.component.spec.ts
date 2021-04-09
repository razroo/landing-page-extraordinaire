import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingRocketComponent } from './landing-rocket.component';

describe('LandingRocketComponent', () => {
  let component: LandingRocketComponent;
  let fixture: ComponentFixture<LandingRocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingRocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingRocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
