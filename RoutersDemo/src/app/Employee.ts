export class Employee {
  EmpId!: number;
  Name!: string;
  Dept!: string;
  Designation!: string;

  constructor(EmpId: number, Name: string, Dept: string, Designation: string) {
    this.EmpId = EmpId;
    this.Name = Name;
    this.Dept = Dept;
    this.Designation = Designation;
  }
}
