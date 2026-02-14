import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceTrackerCardComponent } from './absence-tracker-card.component';

describe('AbsenceTrackerCardComponent', () => {
  let component: AbsenceTrackerCardComponent;
  let fixture: ComponentFixture<AbsenceTrackerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsenceTrackerCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsenceTrackerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
