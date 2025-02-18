import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

@Component({
    selector: 'app-course-form',
    standalone: true,
    imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatOptionModule, MatSelectModule, MatTableModule],
    templateUrl: './course-register-list-form.component.html',
    styleUrls: ['./course-register-list-form.component.css'],
  })
  export class CourseRegisterListFormComponent implements OnInit {
  
    students: any[] = [];
    filteredStudents: any[] = []; // Stores filtered students
    selectedStudent: any | null = null;
    searchStudentNumber: string = ''; // Stores input value
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private studentService1: StudentService
    ) {}
  
    ngOnInit(): void {
      this.fetchStudents();
    }
  
    fetchStudents(): void {
      this.studentService1.getAllSRegisterCourses().subscribe({
        next: (studentsData) => {
          console.log('The students', studentsData);
          this.students = studentsData;
          this.filteredStudents = studentsData; // Initialize filtered list
        },
        error: (err) => {
          console.error('Error fetching students:', err);
          alert('Failed to fetch students. Please try again.');
        },
      });
    }
  
    searchStudent(): void {
      if (!this.searchStudentNumber.trim()) {
        this.filteredStudents = this.students; // Reset filter if input is empty
        return;
      }
  
      this.filteredStudents = this.students.filter(student =>
        student.studentNumber.toLowerCase().includes(this.searchStudentNumber.toLowerCase())
      );
    }
  }
  

