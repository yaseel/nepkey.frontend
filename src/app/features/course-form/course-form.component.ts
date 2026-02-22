import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-course-form',
  imports: [ButtonComponent, ReactiveFormsModule],
  templateUrl: './course-form.component.html',
  styleUrl: './course-form.component.scss',
})
export class CourseFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    courseName: ['', Validators.required],
    courseType: ['', Validators.required],
    absenceLimit: [3, [Validators.required, Validators.min(0), Validators.max(100)]],
    currentAbsenceCount: [0, [Validators.required, Validators.min(0), Validators.max(100)]],
  });

  get courseName() {
    return this.form.get('courseName')!;
  }

  get courseType() {
    return this.form.get('courseType')!;
  }

  get absenceLimit() {
    return this.form.get('absenceLimit')!;
  }

  get currentAbsenceCount() {
    return this.form.get('currentAbsenceCount')!;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // add course
  }
}
