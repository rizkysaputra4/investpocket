import { Component, Input, OnInit } from '@angular/core';
import ProductType from 'src/app/model/product-type';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss'],
})
export class FeatureListComponent implements OnInit {
  @Input() items!: ProductType[];

  constructor() {}

  ngOnInit(): void {}
}
