export class product {
  productId!: number;
  productName!: string;
  productDes!: string;
  cost!: string;

  constructor(
    productId: number,
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
