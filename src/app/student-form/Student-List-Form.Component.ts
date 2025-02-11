
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
  templateUrl: './student-list-form.component.html',
  styleUrls: ['./student-list-form.component.css'],
})
export class StudentListFormComponent implements OnInit {
    //student: any = { studentFullName: '',phone: '', address: '', state: '', dateOfBirth:'',department:'', faculty:'' };
    departments: string[] = ['Adult Education', 'Computer Science', 'Electrical', 'Animal Science', 'Art'];
    faculties: string[] = ['Education', 'Sciences', 'Engineering', 'Agric', 'Art'];
  students: any[] = [];
  selectedStudent: any | null = null;
  //@Input() student1: any = {};
  displayedColumns: string[] = ['studentFullName','studentNumber', 'phone','address', 'state', 'dateOfBirth','faculty','department','actions'];
  @Input() student: any = { studentFullName: '', studentNumber: '', phone: '', address: '', state: '', dateOfBirth:'', faculty:'' ,department:''};
  @Output() save = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService1: StudentService
  ) {}


  ngOnInit(): void {
    this.studentService1.getAllStudents().subscribe({
      next: (studentsData) => {
       this.students = studentsData; 

        this.router.navigate(['/students/list']);
      },
      error: (err) => {
         console.error('Error fetching students:', err);
       alert('Failed to fetch students. Please try again.');
      },
     });
   }


   selectStudent2(student1: any) {
    let students: any[] = JSON.parse(localStorage.getItem('students2') || '[]');
    if (!Array.isArray(students)) {
      students = []; // Reset to an empty array if it's not an array
    }
// Remove any existing entry for this student
    students = students.filter(s => s.studentNumber !== student1.studentNumber);
// Add the new selected student
    students.push(student1);
    localStorage.setItem('students2',  JSON.stringify(student1) )
    JSON.parse(localStorage.getItem('students/list') || '[]');
    console.log('The students', student1)
    this.router.navigate([`./students/update/${student1.studentNumber}`])

   }

  deleteStudent(studentNumber: any) {
    if (!studentNumber) {
        console.error('Invalid student number:', studentNumber);
        alert('Invalid student number!');
        return;
    }

    console.log(`Student ${studentNumber} about to delete`);

    this.studentService1.deleteStudent(studentNumber.toString()).subscribe({
      next: () => {
        console.log(`Student ${studentNumber} deleted successfully`);
        alert('Student deleted successfully!');

        this.loadStudents(); // ✅ Calls method to refresh the list dynamically
        
      },
      error: (err) => {
        console.error('Error deleting student:', err);
        alert('Failed to delete student.');
      }
    });
}

loadStudents() {
  this.studentService1.getAllStudents().subscribe({
      next: (students) => {
          this.students = students; // ✅ Updates the students list
      },
      error: (err) => {
          console.error('Error fetching students:', err);
      }
  });
}

  }
  



  


 




