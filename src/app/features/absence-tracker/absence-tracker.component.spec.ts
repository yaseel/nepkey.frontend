import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceTrackerComponent } from './absence-tracker.component';

describe('AbsenceTrackerComponent', () => {
  let component: AbsenceTrackerComponent;
  let fixture: ComponentFixture<AbsenceTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceTrackerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
