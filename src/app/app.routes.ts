

import { Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component'; 
import { StudentGradeFormComponent } from './student-form/student-grade-form.component';
import { StudentEditFormComponent } from './student-form/Student-Edit-Form.Component';
import { StudentRegisterFormComponent } from './student-form/Student-Register-Form.Component';
import { StudentListFormComponent } from './student-form/Student-List-Form.Component';
import { StudentUpdateFormComponent } from './student-form/Student-Update-Form.Component';
import { CourseFormComponent } from './course-form/Course-Form-Form.Component';
import { CourseListFormComponent } from './course-form/Course-List-Form.Component';
import { CourseRegistrationComponent } from './course-form/Course-Register-Form.Component';
//import { StudentListFormComponent } from './student-form/Student-List-Form.Component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/students/list', pathMatch: 'full' }, 
  { path: 'students', component: StudentFormComponent },   
  { path: 'students/add', component: StudentGradeFormComponent },
  { path: 'students/edit/:id', component: StudentEditFormComponent },
  { path: 'edit-student/:studentNumber', component: StudentFormComponent },
  { path: 'students/edit/:studentNumber', component: StudentEditFormComponent },
  { path: 'students/addNew', component: StudentRegisterFormComponent },
  { path: 'students/list', component: StudentListFormComponent },
  { path: 'students/update/:studentNumber', component: StudentUpdateFormComponent },
  { path: 'students/addCourse', component: CourseFormComponent },
  { path: 'course/list', component: CourseListFormComponent },
  { path: 'course/registration', component: CourseRegistrationComponent }
];
