import { Injectable } from '@angular/core';
import { employee } from '../models/empolyee.models';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  EmpolyeeArr: employee[] = [
    {
      id: 1,
      email: 'Mansimalik@gmail.com',
      password: '111',
      phone: '8700639766',
      location: 'Uttar Pradesh',
      design: 'Full Stack Developer',
    },
    {
      id: 2,
      email: 'Yashchaudhary@gmail.com',
      password: '1111',
      phone: '000000000',
      location: 'Uttar Pradesh',
      design: 'Azure Developer',
    },
    {
      id: 3,
      email: 'DeepikaBisht@gmail.com',
      password: '11111',
      phone: '000000000',
      location: 'Rajasthan',
      design: 'IOS Developer',
    },
    {
      id: 4,
      email: 'Baljeet@gmail.com',
      password: '111111',
      phone: '076768600',
      location: 'Bihar',
      design: 'Business Analyst',
    },
  ];

  constructor() {}

  OnGet() {
    return this.EmpolyeeArr;
  }

  onAdd(EmpolyeeArr: employee) {
    this.EmpolyeeArr.push(EmpolyeeArr);
  }
}
