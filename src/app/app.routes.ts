

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
import { CourseRegisterListFormComponent } from './course-form/Course-Register-List-Form.Component';
import { StudentPortalComponent } from './student-portal/student-portal.component';
import { FeePaymentComponent } from './fee-payment/fee-payment.component';
import { FeeListPaymentComponent } from './fee-payment/fee-list-payment.component';
//import { StudentListFormComponent } from './student-form/Student-List-Form.Component';


export const appRoutes: Routes = [
  //{ path: '', redirectTo: '/students/list', pathMatch: 'full' },
  //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: '', component: StudentPortalComponent },  
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
  { path: 'course/registration', component: CourseRegistrationComponent },
  { path: 'course/registered-courses', component: CourseRegisterListFormComponent },
  { path: 'payment', component: FeePaymentComponent },
  { path: 'payment/AllPayments', component: FeeListPaymentComponent } 
  //{ path: 'payment/history/:studentId', component: PaymentHistoryComponent } // if you create one

];
//

// const routes: Routes = [
//   { path: '', component: StudentPortalComponent },  // Home Page
//   { path: 'students/list', component: StudentListComponent },
//   { path: 'students/addNew', component: RegisterStudentComponent },
//   { path: 'course/list', component: CourseListComponent },
//   { path: 'course/registration', component: CourseRegistrationComponent },
//   { path: 'students/add', component: AssignGradeComponent },
//   { path: 'course/registered-courses', component: RegisteredCoursesComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
