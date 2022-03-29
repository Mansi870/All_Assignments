export class product {
  productId!: string;
  productName!: string;
  productDes!: string;
  cost!: string;

  constructor(
    productId: string,
    productName: string,
    productDes: string,
    cost: string
  ) {
    this.productId = productId;
    this.productName = productName;
    this.productDes = productDes;
    this.cost = cost;
  }
}
