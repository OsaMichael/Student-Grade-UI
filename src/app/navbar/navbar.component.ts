import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar">
      <a routerLink="/" class="navbar-brand">StudentApp</a>
      <ul class="navbar-links">
        <li><a routerLink="/students/add" routerLinkActive="active">Assign Grade</a></li>
        <li><a routerLink="/students" routerLinkActive="active">View Students</a></li>
      </ul>
    </nav>
  `,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {}
