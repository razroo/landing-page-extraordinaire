import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetLightComponent } from './street-light.component';

describe('StreetLightComponent', () => {
  let component: StreetLightComponent;
  let fixture: ComponentFixture<StreetLightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreetLightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreetLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
