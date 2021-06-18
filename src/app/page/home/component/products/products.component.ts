import { Component, Input, OnInit } from '@angular/core';
import Product from '../../model/product';
import { ProductService } from '../../service/product/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private readonly productService: ProductService) {
    this.products = productService.getProduct();
  }

  ngOnInit(): void {}
}
