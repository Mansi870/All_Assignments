import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { product } from '../Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((param) => {
      this.idForRouting = Number(param.get('id'));
      if (this.idForRouting > 0) this.getProductOnID();
    });
  }
  getProductOnID() {
    this.arrProductList = this.productService.getProductBasedOnID(
      this.idForRouting
    );
  }
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {}
  idForRouting = 0;

  arrProductList: product[] = [];

  getAllProductsFromProductService() {
    this.arrProductList = this.productService.getAllProducts();
  }

  routeFromNewProductOnId() {
    let strURLForRouting = ' ';
    strURLForRouting = 'productWithID/' + this.idForRouting;

    this.router.navigate([strURLForRouting]);
  }
  getAllProducts() {
    this.arrProductList = this.productService.getAllProducts();
  }
}
