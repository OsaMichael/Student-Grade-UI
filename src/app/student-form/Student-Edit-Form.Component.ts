import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';




@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [
    CommonModule, FormsModule, MatInputModule, MatFormFieldModule,
    MatButtonModule, ReactiveFormsModule,MatOptionModule, MatSelectModule
  ],
  templateUrl: './student-Edit-form.component.html',
  styleUrls: ['./student-Edit-form.component.css'],
})
export class StudentEditFormComponent implements OnInit{
  editStudentForm!: FormGroup;
  @Input() student: any = { studentName: '', studentNumber: '', subject: '', grade: '',remark:''};
  @Output() save = new EventEmitter<any>();
  studentNumber: string = '';
 
 editStudent: any;
 
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,private studentService1: StudentService){
  
}
    ngOnInit(): void {

        this.editStudentForm = this.fb.group({
            studentName: ['', Validators.required],
            studentNumber: ['', Validators.required],
            remark: ['', Validators.required],
            grade: ['', Validators.required],
            subject: ['', Validators.required],
        })

      this.retrieveId()
    }

  subjects: string[] = ['Math', 'Science', 'History', 'English', 'Art'];
  grades: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

    get _studentName(){
        return this.editStudentForm.get('studentName')
    }

    get _studentNumber(){
        return this.editStudentForm.get('studentNumber')
    }

    get _remark(){
        return this.editStudentForm.get('remark')
    }

    get _grade(){
        return this.editStudentForm.get('grade')
    }
    get _subject(){
        return this.editStudentForm.get('subject')
    }


retrieveId() { 

    const studentData = localStorage.getItem('students')
    console.log(studentData)
    if (studentData) {
        const student = JSON.parse(studentData);
        console.log(studentData)
        this.editStudentForm.patchValue({...student});
        this.editStudentForm.controls['studentNumber'].disable()
    } else {
        console.log('data not found')
    }   
  }

  saveStudent(data:any) {
  
    if (this.editStudentForm.valid) {
      const updatedStudent = this.editStudentForm.getRawValue();
      console.log('the now new item ',updatedStudent)

       this.studentService1.editStudentNew(updatedStudent).subscribe({
        next: (res) => {
            console.log('the response' ,res)
          alert('Student updated successfully!');
          this.router.navigate(['/students']);
        },
        error: (err) => {
          console.error('Error updating student:', err);
          alert('Failed to update student.');
        }
      });
    }
  }


  
}



