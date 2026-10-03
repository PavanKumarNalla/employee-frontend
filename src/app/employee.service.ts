import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { Observable } from 'rxjs';


//const baseURL = "http://localhost:8080/api/v1/employees";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //private baseURL = "http://localhost:8080/api/v1/employees";
   private baseURL = "http://localhost:8080/api/v1/employees";
  // private baseURL = "http://crudoperations-env.eba-g3yrkdg3.ap-south-1.elasticbeanstalk.com/";
  //private baseURL = "http://angularapplication-env.eba-pva8dmn3.ap-south-1.elasticbeanstalk.com/api/v1/employees";

  constructor(private httpClient: HttpClient) {}

  getEmployeesList(): Observable<Employee[]>{

    return this.httpClient.get<Employee[]>(`${this.baseURL }`);
  }

  createEmployee(employee: Employee): Observable<Object>{

    return this.httpClient.post(`${this.baseURL }`, employee);
  }
  getEmployeeById(id: number): Observable<Employee>{

    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);

}
updateEmployee(id: number, employee: Employee):Observable<Object>{
   return this.httpClient.put(`${this.baseURL}/${id}`,employee);

}
 deleteEmployee(id: number): Observable<Object>{
   return this.httpClient.delete(`${this.baseURL}/${id}`);

 }


}
