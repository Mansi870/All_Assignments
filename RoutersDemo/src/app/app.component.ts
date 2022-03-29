import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { product } from './Product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'RoutersDemo';
  strUIDForLogin: string = 'Admin';
  strPWDForLogin: string = 'Admin@123';

  constructor(
    private authenticationService: AuthenticationService,
    private productService: ProductService
  ) {}

  login() {
    this.authenticationService.login();
  }
  logOut() {
    this.authenticationService.logOut();
  }
}
