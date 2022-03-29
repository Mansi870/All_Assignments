import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  getAllDetails() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/product';

  getDetails(): Observable<any> {
    return this.http.get(this.url);
  }
}
