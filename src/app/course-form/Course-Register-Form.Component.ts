
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
  selector: 'app-course-form',
  standalone: true,
  imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, 
    MatSelectModule,MatTableModule,MatDatepickerModule,MatNativeDateModule],
    templateUrl: './course-register-form.component.html',
    styleUrls: ['./course-register-form.component.css']
})
export class CourseRegistrationComponent  implements OnInit {
  course: any =  { courseName: '', courseCode: '',studentNumber:'' };
  courses: string[] = ['GST101', 'GST012', 'Data Structures', 'Algorithms', 'Computer Networks'];
  courseCodeses: string[] = ['101','102','COM102','COM111','GST101']

  students: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService1: StudentService
  ) {}

  registerCourse() {
    if (!this.course.courseName || !this.course.courseCode || !this.course.studentNumber) {
        console.log(`new request : ${this.course}`);
      alert('Please fill all fields');
      
      return;
    }
    console.log(`new request : ${this.course}`);
    this.studentService1.registerCourse(this.course).subscribe({  
      next: (response) => {
        console.log(`Response: ${response.message}`);
        alert(`Response: ${response.message}`); 
        this.router.navigate(['/course/registered-courses']);
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






// import { Component, OnInit } from '@angular/core';
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

// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';



// @Component({
//   selector: 'app-course-form',
//   standalone: true,
//   imports: [CommonModule, FormsModule,MatInputModule,MatFormFieldModule,MatButtonModule, MatOptionModule, 
//     MatSelectModule,MatTableModule,MatDatepickerModule,MatNativeDateModule],
//     templateUrl: './course-register-form.component.html',
//     styleUrls: ['./course-register-form.component.css']
// })
// export class CourseRegistrationComponent  implements OnInit {
//   course: any =  { courseName: '', courseCode: '',studentNumber:'' };
//   courses: string[] = ['GST101', 'GST012', 'Data Structures', 'Algorithms', 'Computer Networks'];
//   courseCodeses: string[] = ['101','102','COM102','COM111','GST101']

//   students: any[] = [];
//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private studentService1: StudentService
//   ) {}

//   registerCourse() {
//     if (!this.course.courseName || !this.course.courseCode || !this.course.studentNumber) {
//         console.log(`new request : ${this.course}`);
//       alert('Please fill all fields');
      
//       return;
//     }
//     console.log(`new request : ${this.course}`);
//     this.studentService1.registerCourse(this.course).subscribe({  
//       next: (response) => {
//         console.log(`Response: ${response.message}`);
//         alert(`Response: ${response.message}`); 
//         //this.router.navigate(['/courses']);
//       },
//       error: (err) => {
//         console.error('Error adding student:', err);
//         alert('Failed to add student. Please try again.');
//       },
//     });
//   }


//    ngOnInit(): void {

//   }
  

// }


