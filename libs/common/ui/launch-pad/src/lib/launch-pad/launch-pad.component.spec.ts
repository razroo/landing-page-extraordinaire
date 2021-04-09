import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPadComponent } from './launch-pad.component';

describe('LaunchPadComponent', () => {
  let component: LaunchPadComponent;
  let fixture: ComponentFixture<LaunchPadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchPadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
