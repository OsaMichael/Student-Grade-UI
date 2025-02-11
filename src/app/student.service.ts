import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' 
})
export class StudentService {
  private apiUrl = 'http://localhost:28540/api/studentgrade';
  private apiUrl2 = 'http://localhost:28540/api/student';

  constructor(private http: HttpClient) {} 

  registerStudent(student: any): Observable<any> {
    console.log('the now new today ',student);
    alert('about to call api');
    return this.http.post(`${this.apiUrl2}/RegisterStudent`, student );
  }
  
  
  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/AllStudents`); 
  }

  updateStudentNew(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl2}/UpdateStudent`, student );
  }
  
////////////////////

  addStudent(student: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddGrade`, student );
  }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/GetStudents`); 
  }


  editStudent(student: any): Observable<any> {
    console.log('student' ,student)
    return this.http.put(`${this.apiUrl}/UpdateStudent`, student );
  }


  getStudentById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getStudentByNumber(studentNumber: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getStudentByNumber,${studentNumber}`);
  }

  editStudentNew(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateStudent`, student );
  }

  deleteStudent(studentNumber: string): Observable<any> {
    alert('Are you sure you want to delete?');
    return this.http.delete(`${this.apiUrl}/deleteStudent/${studentNumber}`);
}


}

