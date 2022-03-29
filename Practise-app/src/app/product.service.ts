import { Injectable } from '@angular/core';
import { product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  arrEmp: product[] = [
    {
      productId: '1',
      productName: 'Smart Phones',
      productDes: 'Apple Phone',
      cost: '75000',
    },
    {
      productId: '2',
      productName: 'Smart TVs',
      productDes: 'Samsung TVs',
      cost: '55000',
    },
    {
      productId: '3',
      productName: 'Washing Machine',
      productDes: 'LG Washing Machine',
      cost: '30000',
    },
    {
      productId: '4',
      productName: 'Laptop',
      productDes: 'MacBook Air',
      cost: '95000',
    },
    {
      productId: '5',
      productName: 'Heater',
      productDes: 'XYZ Heater',
      cost: '35000',
    },
  ];

  getAllProducts() {
    return this.arrEmp;
  }

  getsProductById(Id: string) {
    let result = this.arrEmp.filter((e1) => {
      return e1.productId == Id;
    });
    return result;
  }
  getsProductByIdandName(Id: string, Name: string) {
    let result = this.arrEmp.filter((e1) => {
      return e1.productId == Id || e1.productName == Name;
    });
    return result;
  }
  getsProductByAllFilters(Id: string, Name: string, Des: string, cost: string) {
    let result = this.arrEmp.filter((e1) => {
      return (
        e1.productId == Id ||
        e1.productName == Name ||
        e1.productDes == Des ||
        e1.cost == cost
      );
    });
    return result;
  }
}
