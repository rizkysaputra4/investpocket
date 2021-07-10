import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Pocket } from '../../model/Pocket';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {
  data: any = {};
  deal: FormGroup = new FormGroup({});
  transactionType: string = '';
  pocketList: Promise<any> = new Promise((res) => res);
  clickedPocketData: Pocket = {
    id: '',
    name: '',
    qty: 0,
    price: 0,
    productId: '0',
  };
  product: string = '';

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly service: TransactionService
  ) {}

  ngOnInit(): void {
    this.deal = new FormGroup({
      qty: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
      product: new FormControl(
        this.activatedRoute.snapshot.paramMap.get('productId')
      ),
    });

    this.data = this.service.getData();

    this.pocketList = new Promise((resolve) => {
      this.service
        .getPocketList()
        .then((data: Pocket[]) => {
          console.log(data);
          resolve(
            data.filter((pocket) => {
              return (
                pocket.productId ===
                this.activatedRoute.snapshot.paramMap.get('productId')
              );
            })
          );
        })
        .catch((err) => console.log(err));
    });

    this.product =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';
  }

  onSubmit() {
    let data = this.deal.value;
    console.log(data);
    if (data.type == 'buy') {
      console.log('buy');
      this.clickedPocketData.qty += data.qty;
    }

    if (data.type == 'sell') {
      console.log('sell');
      this.clickedPocketData.qty -= data.qty;
    }

    this.service
      .updatePocket(this.clickedPocketData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    this.service
      .makeDeal(this.deal.value)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    console.log(this.clickedPocketData);
  }

  changeClickedPocket(pocket: Pocket) {
    this.clickedPocketData = pocket;
    console.log(pocket);
  }
}
