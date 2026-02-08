import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-absence-tracker',
  imports: [ButtonComponent],
  templateUrl: './absence-tracker.component.html',
  styleUrl: './absence-tracker.component.scss',
})
export class AbsenceTrackerComponent {}
