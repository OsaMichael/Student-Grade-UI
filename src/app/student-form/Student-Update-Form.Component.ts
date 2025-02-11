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
  templateUrl: './student-Update-form.component.html',
  styleUrls: ['./student-Update-form.component.css'],
})
export class StudentUpdateFormComponent implements OnInit{
  updateStudentForm!: FormGroup;
  //@Input() student: any = { studentFullName: '', studentNumber: '', subject: '', grade: '',remark:''};
  @Input() student: any = { studentFullName: '', studentNumber: '', phone: '', address: '', state: '', dateOfBirth:'', faculty:'' ,department:''};
  @Output() save = new EventEmitter<any>();
  studentNumber: string = '';
 
 editStudent: any;
 
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,private studentService1: StudentService){
  
}
    ngOnInit(): void {

        this.updateStudentForm = this.fb.group({
            studentFullName: ['', Validators.required],
            studentNumber: ['', Validators.required],
            phone: ['', Validators.required],
            address: ['', Validators.required],
            state: ['', Validators.required],
            dateOfBirth: ['', Validators.required],
            faculty: ['', Validators.required],
            department: ['', Validators.required],
        })

      this.retrieveId()
    }


  departments: string[] = ['Adult Education', 'Computer Science', 'Electrical', 'Animal Science', 'Art'];
  faculties: string[] = ['Education', 'Sciences', 'Engineering', 'Agric', 'Art'];

    get _studentFullName(){
        return this.updateStudentForm.get('studentFullName')
    }

    get _studentNumber(){
        return this.updateStudentForm.get('studentNumber')
    }

    get _phone(){
        return this.updateStudentForm.get('phone')
    }

    get _address(){
        return this.updateStudentForm.get('address')
    }
    get _state(){
        return this.updateStudentForm.get('state')
    }
    get _dateOfBirth(){
        return this.updateStudentForm.get('dateOfBirth')
    }
    get _faculty(){
        return this.updateStudentForm.get('faculty')
    }
    get _department(){
        return this.updateStudentForm.get('department')
    }


retrieveId() { 

    const studentData = localStorage.getItem('students2')
    console.log(studentData)
    if (studentData) {
        const student = JSON.parse(studentData);
        console.log(studentData)
        this.updateStudentForm.patchValue({...student});
        this.updateStudentForm.controls['studentNumber'].disable()
    } else {
        console.log('data not found')
    }   
  }

  saveStudent(data:any) {
  
    if (this.updateStudentForm.valid) {
      const updatedStudent = this.updateStudentForm.getRawValue();
      console.log('the now new item ',updatedStudent)

       this.studentService1.updateStudentNew(updatedStudent).subscribe({
        next: (res) => {
            console.log('the response' ,res)
          alert('Student updated successfully!');
          this.router.navigate(['/students/list']);
        },
        error: (err) => {
          console.error('Error updating student:', err);
          alert('Failed to update student.');
        }
      });
    }
  }


  
}



