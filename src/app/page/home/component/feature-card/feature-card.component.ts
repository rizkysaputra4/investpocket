import { Component, Input, OnInit } from '@angular/core';
import ProductType from '../../../../model/product-type';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss'],
})
export class FeatureCardComponent implements OnInit {
  @Input() item!: ProductType;

  constructor() {
    console.log('feature carsd');
  }

  ngOnInit(): void {}
}
