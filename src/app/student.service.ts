import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class StudentService {
  private apiUrl = 'http://localhost:28540/api/studentgrade';

  constructor(private http: HttpClient) {} 

  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddGrade`, student );
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetStudents`); 
  }

  // editStudent(studentNumber: string) {
  //   this.router.navigate(['/edit-student', studentNumber]); // Navigate to the edit page
  // }
  //////

  editStudent(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateStudent`, student );
  }

  // updateStudent(student: any): Observable<any> {
  //   return this.http.put<any>(`${this.apiUrl}/${student.studentNumber}`, student);
  // }

  getStudentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getStudentByNumber(studentNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getStudentByNumber,${studentNumber}`);
  }

  updateStudent(student: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${student.studentNumber}`, student);
  }
  
}

