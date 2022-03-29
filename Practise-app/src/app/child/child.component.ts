import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // validateForm(inputEmail: string, inputPassword: string) {
  //   if (inputEmail == 'admin@gmail.com' && inputPassword == '12345') {
  //     alert(`Login sucessfull for ${inputEmail}`);
  //   } else if (inputEmail == 'admin@gmail.com') {
  //     alert(`Invalid EmailID`);
  //   } else {
  //     alert(`Invalid Password`);
  //   }
  // }
  count = 0;
  incrementCount() {
    ++this.count;
  }
  decrementCount() {
    --this.count;
  }
}
