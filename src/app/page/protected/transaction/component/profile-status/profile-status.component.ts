import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/page/public/home/model/product';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
})
export class ProfileStatusComponent implements OnInit {
  data: any = {};
  product: string = 'gold';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: TransactionService
  ) {}

  ngOnInit(): void {
    this.data = this.service.getData();
    this.product =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';
    this.data[this.product] = '';
  }
}
