import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="navbar-brand">Student Grading System</a>
      <ul class="navbar-links">
      <li><a routerLink="/students/list" routerLinkActive="active">Students</a></li> 
      <li><a routerLink="/students/addNew" routerLinkActive="active">Register Student</a></li>
      <li><a routerLink="/students/add" routerLinkActive="active">Assign Grade</a></li>
      <li><a routerLink="/students" routerLinkActive="active">Grade Students</a></li>
      <li><a routerLink="/students/addCourse" routerLinkActive="active">Add Courses</a></li>
      <li><a routerLink="/course/list" routerLinkActive="active">Courses</a></li>
      <li><a routerLink="/course/registration" routerLinkActive="active">Register Courses</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
