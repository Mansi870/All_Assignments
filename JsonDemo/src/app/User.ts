export class User {
  email!: string;
  password!: string;
  phone!: string;
  location!: string;
  design!: string;
  id!: string;

  constructor(
    email: string,
    password: string,
    phone: string,
    location: string,
    design: string,
    id: string
  ) {
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.location = location;
    this.design = design;
    this.id = id;
  }
}
