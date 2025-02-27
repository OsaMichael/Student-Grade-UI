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
 import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
    selector: 'app-fee-payment',
    standalone: true,
    imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatOptionModule, MatSelectModule, MatTableModule],
    templateUrl: './fee-list-payment.component.html',
    styleUrls: ['./fee-list-payment.component.css'],
  })
  export class FeeListPaymentComponent implements OnInit {
  
    students: any[] = [];
   // filteredStudents: any[] = []; // Stores filtered students
    filteredStudents = new MatTableDataSource<any>();
    selectedStudent: any | null = null;
    searchStudentNumber: string = ''; // Stores input value
  
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private studentService1: StudentService
    ) {}
  
    ngOnInit(): void {
      this.fetchStudentsPayments();
    }
  
    fetchStudentsPayments(): void {
      this.studentService1.getAllPayments().subscribe({
        next: (studentsData) => {
          console.log('The payments', studentsData);
          
          if (!Array.isArray(studentsData)) {
            console.error('🚨 Expected an array but got:', studentsData);
            return;
          }

          this.students = studentsData;
          this.filteredStudents.data = studentsData; // Initialize filtered list
        },
        error: (err) => {
          console.error('Error fetching students:', err);
          alert('Failed to fetch students. Please try again.');
        },
      });
    }
  
    searchStudent(): void {
      if (!this.searchStudentNumber.trim()) {
        this.filteredStudents.data = this.students; // Reset filter if input is empty
        return;
      }
  
      this.filteredStudents.data = this.students.filter(student =>
        student.studentNumber.toLowerCase().includes(this.searchStudentNumber.toLowerCase())
      );
    }
  }
  

