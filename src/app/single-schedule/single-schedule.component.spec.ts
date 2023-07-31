import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleScheduleComponent } from './single-schedule.component';

describe('SingleScheduleComponent', () => {
  let component: SingleScheduleComponent;
  let fixture: ComponentFixture<SingleScheduleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleScheduleComponent]
    });
    fixture = TestBed.createComponent(SingleScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
