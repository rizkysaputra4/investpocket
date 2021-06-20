import { Injectable } from '@angular/core';
import Benefit from '../../model/benefit';
import Product from '../../model/product';

@Injectable({
  providedIn: 'root',
})
export class BenefitService {
  benefit: Benefit[] = [];

  constructor() {
    this.benefit = this.initReasons();
  }

  initReasons(): Benefit[] {
    let result: Benefit[] = [
      new Benefit(
        'Delivery',
        'We have delivery service to all city in Indonesia',
        'service'
      ),
      new Benefit(
        'Legality',
        'We commit to keep your trusted with legality transactions.',
        'service'
      ),
      new Benefit('Price', 'Good quality with the best prices', 'service'),
      new Benefit(
        'Reward',
        'More transaction more point and reward',
        'product'
      ),
      new Benefit(
        'Transaction',
        'Our transaction is simple and secure',
        'product'
      ),
      new Benefit(
        'Brand',
        'Our product is the best on quality and brand',
        'product'
      ),
    ];

    return result;
  }

  getBenefit(): Benefit[] {
    return this.benefit;
  }
}
