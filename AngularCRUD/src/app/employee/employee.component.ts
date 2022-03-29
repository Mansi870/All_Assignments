import { Component, OnInit } from '@angular/core';
import { employee } from '../models/empolyee.models';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  EmpolyeeArr!: employee[];
  constructor(private employeeService: EmployeesService) {}

  ngOnInit(): void {
    this.EmpolyeeArr = this.employeeService.OnGet();
  }
}
