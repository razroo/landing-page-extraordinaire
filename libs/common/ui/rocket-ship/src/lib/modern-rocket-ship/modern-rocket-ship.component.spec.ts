import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernRocketShipComponent } from './modern-rocket-ship.component';

describe('ModernRocketShipComponent', () => {
  let component: ModernRocketShipComponent;
  let fixture: ComponentFixture<ModernRocketShipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModernRocketShipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernRocketShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
