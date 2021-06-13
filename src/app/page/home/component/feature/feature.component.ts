import { Component, Input, OnInit } from '@angular/core';
import ProductType from '../../../../model/product-type';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
})
export class FeatureComponent implements OnInit {
  @Input() items!: ProductType[];

  constructor() {}

  ngOnInit(): void {}
}
