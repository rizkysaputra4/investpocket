import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Product from 'src/app/page/public/home/model/product';
import { Pocket } from '../../model/Pocket';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-profile-status',
  templateUrl: './profile-status.component.html',
  styleUrls: ['./profile-status.component.scss'],
})
export class ProfileStatusComponent implements OnInit {
  data: any = {};
  product: string = 'gold';
  total = { price: 0, qty: 0, product: '' };

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: TransactionService
  ) {}

  ngOnInit(): void {
    this.data = this.service.getData();
    this.product =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';
    this.total.product = this.product;
    this.data[this.product] = '';

    this.service.getPocketList().subscribe(
      (data: Pocket[]) => {
        let pocketList = data
          .filter((pocket) => {
            let allData = this.service.getData();
            pocket.price =
              allData.comodityPrice[pocket.productId].priceSell * pocket.qty;

            return (
              pocket.productId ===
              this.activatedRoute.snapshot.paramMap.get('productId')
            );
          })
          .forEach((pocket: Pocket) => {
            this.total.price += pocket.price;
            this.total.qty += pocket.qty;
          });
      },
      (err) => console.log(err)
    );
  }
}
