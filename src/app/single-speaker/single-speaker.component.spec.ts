import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSpeakerComponent } from './single-speaker.component';

describe('SingleSpeakerComponent', () => {
  let component: SingleSpeakerComponent;
  let fixture: ComponentFixture<SingleSpeakerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleSpeakerComponent]
    });
    fixture = TestBed.createComponent(SingleSpeakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
