import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateEMAIL } from './PasswordValidator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularFormDemo';

  formUID = 'Mansi';
  formEMAIL = 'Mansi@gmail.com';
  formPWD = 'Admin@123';
  formConfirm = 'Admin@123';

  loginForm1() {
    let strData = `User is successfully Registered with this email ID :${this.formEMAIL}`;
    alert(strData);
  }
  loginFormReactive = new FormGroup({
    uidReactive: new FormControl('Mansi'),
    pwdReactive: new FormControl('Admin'),
    confReactive: new FormControl('Admin'),
  });

  submitReactive() {
    console.log(
      'User ID :' + this.loginFormReactive.get(['uidReactive'])?.value
    );
    console.log(
      'Password :' + this.loginFormReactive.get(['pwdReactive'])?.value
    );
    console.log(
      'Confirm Password :' + this.loginFormReactive.get(['confReactive'])?.value
    );
  }

  heroForm!: FormGroup;
  ngOnInit() {
    this.heroForm = new FormGroup({
      uidReactive: new FormControl('Mansi', [
        Validators.required,
        Validators.minLength(4),
        ValidateEMAIL,
      ]),
      pwdReactive: new FormControl('Admin', [
        Validators.required,
        Validators.minLength(4),
      ]),
      confdReactive: new FormControl('Admin', [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }
  get uidReactive() {
    return this.heroForm.get('uidReactive');
  }
  get pwdReactive() {
    return this.heroForm.get('pwdReactive');
  }
  get confReactive() {
    return this.heroForm.get('confReactive');
  }
}
