import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule,MatMenuModule, MatButtonModule],
  template: `

<nav class="navbar">
<a routerLink="/" class="navbar-brand">Student Grading System</a>
  <div class="dropdown">
    <button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item routerLink="/students/list" routerLinkActive="active">Students</button>
      <button mat-menu-item routerLink="/students/addNew" routerLinkActive="active">Register Student</button>
      <button mat-menu-item routerLink="/students/add" routerLinkActive="active">Assign Grade</button>
      <button mat-menu-item routerLink="/students" routerLinkActive="active">Grade Students</button>
      <button mat-menu-item routerLink="/students/addCourse" routerLinkActive="active">Add Courses</button>
      <button mat-menu-item routerLink="/course/list" routerLinkActive="active">Courses</button>
      <button mat-menu-item routerLink="/course/registration" routerLinkActive="active">Register Course</button>
      <button mat-menu-item routerLink="/course/registered-courses" routerLinkActive="active">All Register Courses</button>
    </mat-menu>
  </div>
</nav>


    <!-- <nav class="navbar">
      <a routerLink="/" class="navbar-brand">Student Grading System</a>
      <ul class="navbar-links">
      <li><a routerLink="/students/list" routerLinkActive="active">Students</a></li> 
      <li><a routerLink="/students/addNew" routerLinkActive="active">Register Student</a></li>
      <li><a routerLink="/students/add" routerLinkActive="active">Assign Grade</a></li>
      <li><a routerLink="/students" routerLinkActive="active">Grade Students</a></li>
      <li><a routerLink="/students/addCourse" routerLinkActive="active">Add Courses</a></li>
      <li><a routerLink="/course/list" routerLinkActive="active">Courses</a></li>
      <li><a routerLink="/course/registration" routerLinkActive="active">Register Course</a></li>
      <li><a routerLink="/course/registered-courses" routerLinkActive="active">All Register Courses</a></li>
      </ul>
    </nav> -->
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
//