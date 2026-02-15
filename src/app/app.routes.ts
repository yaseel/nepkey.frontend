import { Routes } from '@angular/router';
import { AbsenceTrackerComponent } from './features/absence-tracker/absence-tracker.component';
import { LayoutComponent } from './layout/layout.component';
import {CourseFormComponent} from './features/course-form/course-form.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/absence-tracker', pathMatch: "full" },
      { path: 'absence-tracker', component: AbsenceTrackerComponent },
      { path: 'absence-tracker/add-course', component: CourseFormComponent },
      { path: '**', redirectTo: '/absence-tracker' }
    ],
  },
];
