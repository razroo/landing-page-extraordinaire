import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangingLightTopComponent } from './hanging-light-top.component';

describe('HangingLightTopComponent', () => {
  let component: HangingLightTopComponent;
  let fixture: ComponentFixture<HangingLightTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangingLightTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangingLightTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
