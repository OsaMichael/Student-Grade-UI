

import { Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component'; 
import { StudentGradeFormComponent } from './student-form/student-grade-form.component';
import { StudentEditFormComponent } from './student-form/Student-Edit-Form.Component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' }, 
  { path: 'students', component: StudentFormComponent },   
  { path: 'students/add', component: StudentGradeFormComponent },
  { path: 'students/edit/:id', component: StudentEditFormComponent },
  { path: 'edit-student/:studentNumber', component: StudentFormComponent },
  { path: 'students/edit/:studentNumber', component: StudentEditFormComponent },
];

