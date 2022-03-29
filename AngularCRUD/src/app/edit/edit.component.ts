import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from '../models/empolyee.models';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  id: Number | undefined;
  header!: string;
  constructor(
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private employeeService: EmployeesService
  ) {}

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      this.id = Number(param.get('id'));
      this.header = this.id === 0 ? 'Add Employee' : 'Edit Employee';
    });
  }
  onSubmit(form: NgForm) {
    let employee: employee = {
      id: form.value.id,
      email: form.value.name,
      password: form.value.password,
      phone: form.value.phone,
      location: form.value.location,
      design: form.value.design,
    };

    this.employeeService.onAdd(employee);

    this.router.navigateByUrl('');
  }
}
