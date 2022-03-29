import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root',
})
export class EmpService {
  constructor(private http: HttpClient) {}

  baseUrL = 'http://localhost:8001/';

  //Return all the employees from the server to calling component.
  getAllEmployee() {
    let url = this.baseUrL + 'getAllEmployees';
    return this.http.get(url);
  }

  //Return the employee object by its ID
  getEmployeeById(empid: number) {
    let url = this.baseUrL + 'getEmployeeById/' + empid;

    return this.http.get(url);
  }

  //Insert employee record in the database.

  insertEmployee(empObj: Employee) {
    let url = this.baseUrL + 'insertEmployee';
    let header = { 'content-type': 'application/json' };
    let body = JSON.stringify(empObj);

    return this.http.post(url, body, { headers: header, responseType: 'text' });
  }
  //update Employee in database

  updateEmployee(empObj: Employee) {
    let url = this.baseUrL + 'udpateEmployee';

    return this.http.put(url, empObj, { responseType: 'text' });
  }

  //DeleteEmployee record

  deleteEmployee(empid: number) {
    let url = this.baseUrL + 'deleteEmployee/' + empid;

    return this.http.delete(url, { responseType: 'text' });
  }
}
