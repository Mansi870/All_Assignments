import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { EmpService } from '../emp.service';
import { Employee } from '../Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(
    private empService: EmpService,
    private authenticationService: AuthenticationService
  ) {}

  arrEmployeesLst: Employee[] = [];
  //Return all the employees from backend Server.
  getAllEmployee() {
    this.empService.getAllEmployee().subscribe(
      (data: any) => {
        this.arrEmployeesLst = data;
        console.log('Received data:' + data);
      },
      (error) => {
        console.log('Error fetching the data...' + error);
      }
    );
  }

  empId = 0;
  getEmployeeById() {
    this.empService.getEmployeeById(this.empId).subscribe({
      next: (data: any) => {
        this.arrEmployeesLst = [];
        this.arrEmployeesLst.push(data);
        console.log('Received data:' + data);
      },
      error: (err) => {
        console.log('Error fetching the data..' + err);
      },
    });
  }

  //insert employee in db
  insertEmployee() {
    let empObj: Employee = new Employee(
      113,
      'Kajal',
      'IT',
      'Full stack Developer'
    );
    this.empService.insertEmployee(empObj).subscribe({
      next: (data) => {
        alert(data);
        this.getAllEmployee();
      },
      error: (err) => {
        alert('Inside error...');
        console.log('Error fetching the data' + err);
        alert('Unable to insert record');
      },
    });
  }

  updateEmployee() {
    let empObj: Employee = new Employee(1300, 'Anu', 'CSE', 'Developer');
    this.empService.updateEmployee(empObj).subscribe({
      next: (data) => {
        alert(data);
        this.getAllEmployee();
      },
      error: (err) => {
        alert('Inside error...');
        console.log('Error fetching the data' + err);
        alert('Unable to insert record');
      },
    });
  }

  deleteEmployee(empId: number) {
    this.empService.deleteEmployee(empId).subscribe({
      next: (data) => {
        alert(data);
        this.getAllEmployee();
      },
      error: (err) => {
        alert('Inside error...');
        console.log('Error fetching the data' + err);
        alert('Unable to delete record');
      },
    });
  }

  ngOnInit(): void {}
}
