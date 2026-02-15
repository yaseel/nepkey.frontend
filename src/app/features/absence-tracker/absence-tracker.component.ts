import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';
import {AbsenceTrackerCardComponent} from './components/absence-tracker-card/absence-tracker-card.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-absence-tracker',
  imports: [ButtonComponent, AbsenceTrackerCardComponent],
  templateUrl: './absence-tracker.component.html',
  styleUrl: './absence-tracker.component.scss',
})
export class AbsenceTrackerComponent {
  constructor(private router: Router) {
  }

  navigateToAdd() {
    void this.router.navigate(["/absence-tracker/add-course"]);
  }
}
