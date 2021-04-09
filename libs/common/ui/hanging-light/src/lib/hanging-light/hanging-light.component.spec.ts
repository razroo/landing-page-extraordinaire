import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangingLightComponent } from './hanging-light.component';

describe('HangingLightComponent', () => {
  let component: HangingLightComponent;
  let fixture: ComponentFixture<HangingLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangingLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangingLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
