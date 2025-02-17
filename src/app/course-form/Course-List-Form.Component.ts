
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
  imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, MatSelectModule,MatTableModule],
  templateUrl: './course-list-form.component.html',
  styleUrls: ['./course-list-form.component.css'],
})
export class CourseListFormComponent implements OnInit {

    courses: string[] = ['GST101', 'GST012', 'Data Structures', 'Algorithms', 'Computer Networks'];
    courseCodeses: string[] = ['101','102','COM102','COM111','GST101']
  students: any[] = [];
  selectedStudent: any | null = null;

  course: any = { courseName: '',courseCode: '' };
  displayedColumns: string[] = ['courseName','courseCode','actions'];
  @Input() student: any = { courseName: '', courseCode: ''};
  @Output() save = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService1: StudentService
  ) {}


  ngOnInit(): void {
    this.studentService1.getCourses().subscribe({
      next: (studentsData) => {
       this.students = studentsData; 

        this.router.navigate(['/course/list']);
      },
      error: (err) => {
         console.error('Error fetching course:', err);
       alert('Failed to fetch courses. Please try again.');
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

    this.studentService1.removeStudent(studentNumber.toString()).subscribe({
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
  



  


 




