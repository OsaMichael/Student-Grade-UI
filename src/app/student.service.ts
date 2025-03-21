import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root' 
})
export class StudentService {
  //private apiUrl = 'http://localhost:28540/api/studentgrade';
  private  apiUrl = 'https://your-dotnet-api.vercel.app/api/studentgrade';
  //private apiUrl2 = 'http://localhost:28540/api/student';
  private  apiUrl2 = 'https://your-dotnet-api.vercel.app/api/student';
  //private apiUrl3 = 'http://localhost:28540/api/course';
  private  apiUrl3 = 'https://your-dotnet-api.vercel.app/api/course';
  //private apiUrl4 = 'http://localhost:28540/api/payment';
  private  apiUrl4 = 'https://your-dotnet-api.vercel.app/api/payment';
  courseName: any;

  constructor(private http: HttpClient) {} 

  
  getAllStudents(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl2}/AllStudents`); 
  }

  updateStudentNew(student: any): Observable<any> {
    return this.http.put(`${this.apiUrl2}/UpdateStudent`, student );
  }

  
removeStudent(studentNumber: string): Observable<any> {
  alert('Are you sure you want to delete?');
  return this.http.delete(`${this.apiUrl2}/removeStudent/${studentNumber}`);
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
//// courses section

addCourses(course: any): Observable<any> {
  console.log('the now new today ',course);
  //alert('about to call api');
  return this.http.post(`${this.apiUrl3}/AddNewCourse`, course);;
}

registerStudent(student: any): Observable<any> {
  console.log('about to register student ',student);
  //alert('about to call api');
  return this.http.post(`${this.apiUrl2}/RegisterStudent`, student );
}
getCourses(): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl3}/getCourses`); 
}

getRegisteredCourseByStudentNumber(studentNumber: string): Observable<any[]> {
  return this.http.get<any[]>(`${this.apiUrl3}/getCoursebyStudentNumber,${studentNumber}`); 
}
//
// register course
registerCourse(student: any): Observable<any> {
  console.log('about to register course ',student);
  alert('about to call api');
//const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
return this.http.post(`${this.apiUrl3}/CourseRegistration`, student);
}

getStudentCourses(studentNumber: string): Observable<any> {
return this.http.get(`${this.apiUrl3}/course/${studentNumber}`);
}

getAllSRegisterCourses(): Observable<any[]> {
  console.log('about to register course ');
  return this.http.get<any[]>(`${this.apiUrl3}/getAllRegisteredCourses`); 
}

/// payment

processPayment(payment: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(`${this.apiUrl4}/initialize`, JSON.stringify(payment), { headers });
}

processPayment2(payment: any): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post(`${this.apiUrl4}/process`, JSON.stringify(payment), { headers });
}

getPaymentHistory(studentNumber: string): Observable<any> {
  return this.http.get(`${this.apiUrl4}/history/${studentNumber}`);
}

getAllPayments(): Observable<any[]> {
  console.log('about to all payments ');
  return this.http.get<any[]>(`${this.apiUrl4}/getTransactions`); 
}

getAllPayments2(): Observable<any[]> {
  console.log('about to all payments ');
  return this.http.get<any[]>(`${this.apiUrl4}/AllPayments`); 
}

}

