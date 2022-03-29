import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { LoggerService } from './logger.service';
import { product } from './product';
import { ProductService } from './product.service';
import { RestService } from './rest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Practise-app';

  // strName = 'Content Projection';
  // idata = 20;
  // userObj1 = {
  //   id: 22,
  //   Name: 'Mansi',
  // };

  // userObj = {
  //   Name: 'Mansi Malik',
  //   Age: 22,
  //   Location: 'Ghaziabad,Uttar Pradesh',
  //   Degree: 'Graduated in CSE',
  //   Hobbies: 'Playing Badminton , Reading Novels , Dancing and Listening Music',
  // };

  // imgUrl = './assets/kerala.jpg';
  // imgU1 = './assets/Leh-Indian.jpg';
  // imgUrl2 = './assets/R.jpg';

  // imgU = './assets/Phone.jpg';
  // verifyPhone(phone: string) {
  //   if (phone.length == 10) {
  //     let strMessage = `Your Phone Number is verified`;
  //     alert(strMessage);
  //   } else {
  //     alert('Not a valid Number!!Please Enter 10-digit Number');
  //   }
  // }

  //   arrayDemo = [
  //     {
  //       Name: 'Mansi',
  //       location: 'Uttar Pradesh',
  //       Designation: 'Full Stack Developer',
  //       id: 7,
  //     },
  //     {
  //       Name: 'Yash',
  //       location: 'Uttar Pradesh',
  //       Designation: 'Azure Developer',
  //       id: 1,
  //     },
  //     {
  //       Name: 'Deepika',
  //       location: 'Rajasthan',
  //       Designation: 'IOS Developer',
  //       id: 2,
  //     },
  //     {
  //       Name: 'Baljeet',
  //       location: 'Bihar',
  //       Designation: 'Business Analyst',
  //       id: 3,
  //     },
  //     {
  //       Name: 'Sarthak',
  //       location: 'Haryana',
  //       Designation: 'Business Analyst',
  //       id: 4,
  //     },
  //     { Name: 'Mohit', location: 'Punjab', Designation: 'IOS Developer', id: 5 },
  //     {
  //       Name: 'Shrey',
  //       location: 'Haryana',
  //       Designation: 'Full Stack Developer',
  //       id: 6,
  //     },
  //   ];

  //   deleteRecord(id: number) {
  //     console.log(id);
  //     this.arrayDemo = this.arrayDemo.filter((item) => item.id !== id);
  //   }
  // }
  //     }
  //   }
  // }
  // strColor = 'red';
  // bCustomer = true;
  // changeToAdmin() {
  //   this.bCustomer = true;
  // }
  // changeToStudent() {
  //   this.bCustomer = false;
  // }
  // @ViewChild(ChildComponent) child: ChildComponent = new ChildComponent();
  // incrementCount() {
  //   this.child.incrementCount();
  // }
  // decrementCount() {
  //   this.child.decrementCount();
  // }

  // ngClassButton() {
  //   alert('You clicked on ngClass Button.....');
  // }
  // login = true;
  // register = false;
  // Login() {
  //   this.login = true;
  //   this.register = false;
  // }

  // Register() {
  //   this.login = false;
  //   this.register = true;
  // }
  // timeInSeconds = 1;
  // timeInMillis = 1000;
  // convertToMilli() {
  //   this.timeInMillis = this.timeInSeconds * 1000;
  // }

  // strText = '';
  // iCurrency = 1;
  // currentDateInObj = new Date();
  // strForSlicing = 'Mansi Malik';

  // personData = {
  //   'Name:': 'Mansi Malik',
  //   Age: 22,
  //   'Designation ': 'Programmer',
  // };
  // DateInDecimal = 261.19998712;
  //   constructor(
  //     private productService: ProductService,
  //     private logger: LoggerService
  //   ) {}
  //   arrEmp: product[] = [];
  //   GetData = false;
  //   getAllProductFromProductService() {
  //     this.GetData = true;
  //     this.logger.log('Before fetching details from product service......');
  //     this.arrEmp = this.productService.getAllProducts();
  //     this.logger.log('After fetching details from product service......');
  //   }
  //   getProductById(Id: string) {
  //     this.logger.error('fill ID to apply the filter');
  //     this.arrEmp = this.productService.getsProductById(Id);
  //   }
  //   getProductByIdandName(Id: string, Name: string) {
  //     this.logger.warning(
  //       'You are fetching product details by ID and NAME......'
  //     );
  //     this.arrEmp = this.productService.getsProductByIdandName(Id, Name);
  //   }
  //   getProductByAllFilters(Id: string, Name: string, Des: string, cost: string) {
  //     // this.logger.log1('You are fetching product details ......');
  //     this.arrEmp = this.productService.getsProductByAllFilters(
  //       Id,
  //       Name,
  //       Des,
  //       cost
  //     );
  //   }
  // }

  constructor(
    private productService: ProductService,
    private logger: LoggerService,
    private restService: RestService
  ) {}
  arrEmp: product[] = [];

  ngOnInit() {
    this.getAllUsersFromRestService();
  }
  getAllUsersFromRestService() {
    this.restService.getAllDetails().subscribe(
      (data) => {
        this.arrEmp = data;
      },
      (error) => console.log('Error is:' + error)
    );
  }
}
