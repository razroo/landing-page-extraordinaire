import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmarineComponent } from './submarine.component';

describe('SubmarineComponent', () => {
  let component: SubmarineComponent;
  let fixture: ComponentFixture<SubmarineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmarineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
