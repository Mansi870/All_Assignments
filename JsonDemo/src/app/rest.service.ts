import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  url = '   http://localhost:3000/users';
  getUsers(): Observable<any> {
    return this.http.get(this.url);
  }

  //Delete a record from json server

  deleteData(iRecordNum: string): Observable<any> {
    let deleteURl = this.url + '/' + iRecordNum;
    return this.http.delete(deleteURl);
  }

  //insert an oblject in db.json
  insertUser(userObj: User): Observable<any> {
    let header = { 'content-type': 'application/json' };
    let body = JSON.stringify(userObj);

    return this.http.post(this.url, body, { headers: header });
  }
  UpdateUser(userObj: User): Observable<any> {
    let updateURl = this.url + '/' + userObj;
    return this.http.delete(updateURl);
  }
}
