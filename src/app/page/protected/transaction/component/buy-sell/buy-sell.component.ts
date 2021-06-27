import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy-sell',
  templateUrl: './buy-sell.component.html',
  styleUrls: ['./buy-sell.component.scss'],
})
export class BuySellComponent implements OnInit {
  product: string = 'gold';

  constructor(private readonly activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.product =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';
  }
}
