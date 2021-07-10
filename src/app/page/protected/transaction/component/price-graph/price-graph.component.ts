import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-price-graph',
  templateUrl: './price-graph.component.html',
  styleUrls: ['./price-graph.component.scss'],
})
export class PriceGraphComponent implements OnInit {
  product: string = 'gold';

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.product =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';
  }
}
