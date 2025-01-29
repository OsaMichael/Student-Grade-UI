

import { Routes } from '@angular/router';
import { StudentFormComponent } from './student-form/student-form.component'; 
import { StudentGradeFormComponent } from './student-form/student-grade-form.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/students', pathMatch: 'full' }, 
  { path: 'students', component: StudentFormComponent },   
  { path: 'students/add', component: StudentGradeFormComponent },
  //{ path: 'students/edit/:id', component: StudentFormComponent }
];

// export const ROUTES: Route[] = [
//     {path: 'admin', loadComponent: () => import('./admin/panel.component').then(mod => mod.AdminPanelComponent)},
//     // ...
//   ];