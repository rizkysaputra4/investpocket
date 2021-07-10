import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pocket } from '../../model/Pocket';
import ProductPrice from '../../model/ProductPrice';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],
})
export class DealComponent implements OnInit {
  deal: FormGroup = new FormGroup({});
  transactionType: string = '';
  pocketList: Pocket[] = [];
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
    private readonly service: TransactionService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.deal = new FormGroup({
      qty: new FormControl(null, [Validators.required]),
      type: new FormControl('', [Validators.required]),
      product: new FormControl(
        this.activatedRoute.snapshot.paramMap.get('productId')
      ),
    });

    this.service.getPocketList().subscribe(
      (data: Pocket[]) => {
        this.pocketList = data.filter((pocket) => {
          return (
            pocket.productId ===
            this.activatedRoute.snapshot.paramMap.get('productId')
          );
        });
      },
      (err) => console.log(err)
    );

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

    this.service.updatePocket(this.clickedPocketData).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );

    this.service
      .getData(this.product)
      .subscribe((productPrice: ProductPrice[]) => {
        let transactionData = this.deal.value;
        console.log('datatata', transactionData);
        transactionData.total =
          transactionData.qty * productPrice[productPrice.length - 1].priceBuy;
        transactionData.date = new Date();

        this.service.makeDeal(transactionData).subscribe(
          (data) => {
            let path: string = `/p/product/${this.clickedPocketData.productId}`;
            this.router.navigate([path]);
          },
          (err) => console.log(err)
        );
      });
  }

  changeClickedPocket(pocket: Pocket) {
    this.clickedPocketData = pocket;
    console.log(pocket);
  }
}
