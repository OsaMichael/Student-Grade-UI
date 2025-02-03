
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
  selector: 'app-student-form',
  standalone: true,
  imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, MatSelectModule,MatTableModule],
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css'],
})
export class StudentFormComponent implements OnInit {
  //student: any = { studentName: '',studentNumber: '', subject: '', grade: '', remark:'' };
  subjects: string[] = ['Math', 'Science', 'History', 'English', 'Art'];
  grades: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
  students: any[] = [];
  selectedStudent: any | null = null;
  //@Input() student1: any = {};
  displayedColumns: string[] = ['studentName', 'studentNumber','subject', 'grade', 'remark','actions'];
  @Input() student: any = { studentName: '', studentNumber: '', subject: '', grade: '', remark: '' };
  @Output() save = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService1: StudentService
  ) {}


  ngOnInit(): void {
    this.studentService1.getStudents().subscribe({
      next: (studentsData) => {
       this.students = studentsData; 

      //  this.router.navigate(['/students']);
      },
      error: (err) => {
         console.error('Error fetching students:', err);
       alert('Failed to fetch students. Please try again.');
      },
     });
   }


   selectStudent(student1: any) {
    let students: any[] = JSON.parse(localStorage.getItem('students') || '[]');
    if (!Array.isArray(students)) {
      students = []; // Reset to an empty array if it's not an array
    }
// Remove any existing entry for this student
    students = students.filter(s => s.studentNumber !== student1.studentNumber);
// Add the new selected student
    students.push(student1);
    localStorage.setItem('students',  JSON.stringify(student1) )
    JSON.parse(localStorage.getItem('students') || '[]');
    console.log('The students', student1)
    this.router.navigate([`./students/edit/${student1.studentNumber}`])

   }

  }
  



  


 




