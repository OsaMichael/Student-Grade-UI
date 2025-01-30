import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatInputModule, MatFormFieldModule,
    MatButtonModule, MatOptionModule, MatSelectModule
  ],
  templateUrl: './student-Edit-form.component.html',
  styleUrls: ['./student-Edit-form.component.css'],
})
export class StudentEditFormComponent {
  @Input() student: any = { studentName: '', studentNumber: '', subject: '', grade: ''};
  @Output() save = new EventEmitter<any>();

  subjects: string[] = ['Math', 'Science', 'History', 'English', 'Art'];
  grades: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  saveStudent() {
    this.save.emit(this.student);
  }
}





// import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { StudentService } from '../student.service';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// import { MatInputModule } from '@angular/material/input';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatButtonModule } from '@angular/material/button';
// import { MatOptionModule } from '@angular/material/core';
// import { MatSelectModule } from '@angular/material/select';
// import { MatTableModule } from '@angular/material/table';



// @Component({
//   selector: 'app-student-form',
//   standalone: true,
//   imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, MatSelectModule,MatTableModule],
//   templateUrl: './student-edit-form.component.html',
//   styleUrls: ['./student-edit-form.component.css'],
// })
// export class StudentEditFormComponent implements OnInit {
//   student: any = { id:'', studentName: '',studentNumber: '', subject: '', grade: '', remark:'' };
//   subjects: string[] = ['Math', 'Science', 'History', 'English', 'Art'];
//   grades: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];
//   students: any[] = [];
//   @Output() save = new EventEmitter<any>();
//   displayedColumns: string[] = ['studentName', 'studentNumber','subject', 'grade', 'remark'];
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private studentService1: StudentService
//   ) {}


//   saveStudent() {
//     this.save.emit(this.student);
//   }

// //   ngOnInit(): void {
// //     this.fetchStudents();
// //   }

// //   fetchStudents(): void {
// //     this.studentService1.getStudents().subscribe({
// //       next: (studentsData) => (this.students = studentsData),
// //       error: (err) => console.error('Error fetching students:', err),
// //     });
// //   }


// //   editStudent() {
// //      this.studentService1.editStudent(this.student).subscribe({
// //        next: (response) => {
// //         console.log(`Response: ${response.message}`);
// //          alert(`Response: ${response.message}`); 
// //         this.router.navigate(['/students']);
// //       },
// //       error: (err) => {
// //          console.error('Error adding student:', err);
// //         alert('Failed to add student. Please try again.');
// //       },
// //     });
// //   }
// }

//    ngOnInit(): void {

//    }
  




