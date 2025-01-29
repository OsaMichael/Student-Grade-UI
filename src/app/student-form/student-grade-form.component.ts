
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



@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, MatSelectModule,MatTableModule],
  templateUrl: './student-grade-form.component.html',
  styleUrls: ['./student-grade-form.component.css'],
})
export class StudentGradeFormComponent implements OnInit {
  student: any = { studentName: '',studentNumber: '', subject: '', grade: '', remark:'' };
  subjects: string[] = ['Math', 'Science', 'History', 'English', 'Art'];
  grades: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  students: any[] = [];
  displayedColumns: string[] = ['studentName', 'studentNumber','subject', 'grade', 'remark'];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService1: StudentService
  ) {}

saveStudent() {
    this.studentService1.addStudent(this.student).subscribe({
      next: (response) => {
        console.log(`Response: ${response.message}`);
        alert(`Response: ${response.message}`); 
        this.router.navigate(['/students']);
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


