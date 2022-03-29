import { Component } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { RestService } from './rest.service';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'JsonDemo';

  constructor(private restService: RestService) {}
  arrEmp: User[] = [];

  ngOnInit() {
    this.getAllUsersFromRestService();
  }
  getAllUsersFromRestService() {
    this.restService.getUsers().subscribe(
      (data: User[]) => {
        this.arrEmp = data;
      },
      (error: any) => console.log('Error is:' + error)
    );
  }

  deleteData(iDeleteRecordNum: string) {
    alert(iDeleteRecordNum);
    this.restService.deleteData(iDeleteRecordNum).subscribe(
      (data) => {
        this.getAllUsersFromRestService();
      },
      (error) => console.log('Error is:' + error)
    );
  }

  insertUser() {
    let userObj: User = new User(
      'k@gmail.com',
      '1111',
      '98979843',
      'Assam',
      'ASE',
      '8'
    );
    this.restService.insertUser(userObj).subscribe(
      (data) => {
        this.getAllUsersFromRestService();
      },
      (error) => console.log('Error is:' + error)
    );
  }

  UpdateUser() {
    let userObj: User = new User(
      'k@gmail.com',
      '1111',
      '98979843',
      'Assam',
      'ASE',
      '9'
    );
    this.restService.UpdateUser(userObj).subscribe(
      (data) => {
        this.getAllUsersFromRestService();
      },
      (error) => console.log('Error is:' + error)
    );
  }
}
