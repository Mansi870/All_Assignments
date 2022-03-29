import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  parameters: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((param) => {
      this.parameters = param;
      let strParam = `Given user id is ${this.parameters.uid} and the given password is ${this.parameters.pwd}`;
      alert(strParam);
      if (
        this.parameters.uid == 'Admin' &&
        this.parameters.pwd == 'Admin@123'
      ) {
        alert('Valid User');
      } else {
        alert('INValid User');
      }
    });
    let loginDetails = [
      { uid: 'Admin', pwd: 'Admin@123' },
      { uid: 'Mansi', pwd: 'Mansi@123' },
      { uid: 'A', pwd: 'A3' },
    ];
    // Logiiinnn(id:string){
    //   for (let i = 0; i < this.loginDetails.length; i++) {
    //     if (id == this.loginDetails[i].id) {

    // }
  }
}
