import { Component, Input, OnInit } from '@angular/core';
import ProductType from '../../model/product-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  items!: ProductType[];

  constructor() {
    this.items = this.getReasons();
  }

  ngOnInit(): void {}

  getReasons(): ProductType[] {
    let result: ProductType[] = [
      new ProductType(
        'Delivery',
        'We have delivery service to alll city in Indonesia'
      ),
      new ProductType(
        'Legality',
        'We commit to keep your trusted with legality transactions.'
      ),
      new ProductType('Price', 'Good quality with the best prices'),
      new ProductType('Reward', 'More transaction more point and reward'),
      new ProductType('Transaction', 'Our transaction is simple and secure'),
      new ProductType('Brand', 'Our product is the best on quality and brand'),
    ];

    return result;
  }
}
