
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';



@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, 
    MatSelectModule,MatTableModule,MatDatepickerModule,MatNativeDateModule],
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css'],
})
export class StudentRegisterFormComponent implements OnInit {
  student: any = { studentFullName: '',phone: '', address: '', state: '', dateOfBirth:'',department:'', faculty:'' };
  departments: string[] = ['Adult Education', 'Computer Science', 'Electrical', 'Animal Science', 'Art'];
  faculties: string[] = ['Education', 'Sciences', 'Engineering', 'Agric', 'Art'];
  students: any[] = [];
  //displayedColumns: string[] = ['studentName', 'studentNumber','subject', 'grade', 'remark'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService1: StudentService
  ) {}

  registerStudent() {
    this.studentService1.registerStudent(this.student).subscribe({  
      next: (response) => {
        console.log(`Response: ${response.message}`);
        alert(`Response: ${response.message}`); 
        this.router.navigate(['/students/list']);
      },
      error: (err) => {
        console.error('Error adding student:', err);
        alert('Failed to add student. Please try again.');
      },
    });
  }


   ngOnInit(): void {

  }
  

}


