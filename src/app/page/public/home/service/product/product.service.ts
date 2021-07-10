import { Injectable } from '@angular/core';
import Product from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];

  constructor() {
    this.products = this.initProduct();
  }

  initProduct(): Product[] {
    let product = [
      new Product('platinum investment', '1.png'),
      new Product('gold investment', '2.png'),
      new Product('silver investment', '3.png'),
    ];
    return product;
  }

  getProduct(): Product[] {
    return this.products;
  }
}
