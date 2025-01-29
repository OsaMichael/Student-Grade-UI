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
}

