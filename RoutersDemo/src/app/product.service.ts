import { Injectable } from '@angular/core';
import { product } from './Product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}
  arrProductList: product[] = [
    {
      productId: 1,
      productName: 'Smart Phones',
      productDes: 'Apple Phone',
      cost: '75000',
    },
    {
      productId: 2,
      productName: 'Smart TVs',
      productDes: 'Samsung TVs',
      cost: '55000',
    },
    {
      productId: 3,
      productName: 'Washing Machine',
      productDes: 'LG Washing Machine',
      cost: '30000',
    },
    {
      productId: 4,
      productName: 'Laptop',
      productDes: 'MacBook Air',
      cost: '95000',
    },
    {
      productId: 5,
      productName: 'Heater',
      productDes: 'XYZ Heater',
      cost: '35000',
    },
  ];

  getAllProducts() {
    return this.arrProductList;
  }
  getProductBasedOnID(idForRouting: number): product[] {
    return this.arrProductList.filter(
      (product) => product.productId == idForRouting
    );
  }
}
