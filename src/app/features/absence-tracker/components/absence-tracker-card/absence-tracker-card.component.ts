import { Component } from '@angular/core';
import {IconComponent} from '../../../../shared/components/icon/icon.component';
import {ButtonComponent} from '../../../../shared/components/button/button.component';

@Component({
  selector: 'app-absence-tracker-card',
  imports: [
    IconComponent,
    ButtonComponent
  ],
  templateUrl: './absence-tracker-card.component.html',
  styleUrl: './absence-tracker-card.component.scss',
})
export class AbsenceTrackerCardComponent {
  count = 1;
  max = 4;

  get progressPercentage(): number {
    return (this.count / this.max) * 100;
  }
}
