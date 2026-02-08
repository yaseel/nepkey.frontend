import { Routes } from '@angular/router';
import { AbsenceTrackerComponent } from './features/absence-tracker/absence-tracker.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [{ path: '', component: AbsenceTrackerComponent }],
  },
];
