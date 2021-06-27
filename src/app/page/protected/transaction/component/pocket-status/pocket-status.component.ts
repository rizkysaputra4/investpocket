import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'src/app/page/public/login/model/User';
import { Pocket } from '../../model/Pocket';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-pocket-status',
  templateUrl: './pocket-status.component.html',
  styleUrls: ['./pocket-status.component.scss'],
})
export class PocketStatusComponent implements OnInit {
  pocketList: Promise<Pocket[]> = new Promise((res) => res);
  pocket: FormGroup = new FormGroup({});
  pocketEdit: FormGroup = new FormGroup({});
  clickedPocketData: Pocket = {
    id: '',
    name: '',
    qty: 0,
    price: 0,
    productId: '0',
  };

  constructor(
    private readonly service: TransactionService,
    private readonly activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pocket = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(0),
      qty: new FormControl(0),
    });

    this.pocketEdit = new FormGroup({
      name: new FormControl(this.clickedPocketData.name, [Validators.required]),
      price: new FormControl(this.clickedPocketData.price),
      qty: new FormControl(this.clickedPocketData.qty),
    });

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
  }

  onSubmit(): void {
    let pocket: Pocket = this.pocket.value;
    pocket.id = this.clickedPocketData.id;
    pocket.productId =
      this.activatedRoute.snapshot.paramMap.get('productId') || 'gold';

    let submit = this.service.addPocket(this.pocket.value);
    submit
      .then((data) => {
        console.log(data);
        this.ngOnInit();
      })
      .catch((err) => console.log(err));
  }

  async getPocketList(): Promise<Pocket[]> {
    let pockets: Pocket[] = [];

    this.service
      .getPocketList()
      .then((data) => {
        console.log(data);
        pockets = data;
      })
      .catch((err) => console.log(err));

    return pockets;
  }

  deletePocket(id: string) {
    this.service
      .deletePocket(id)
      .then((data) => {
        console.log(data);
        this.ngOnInit();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updatePocket() {
    let pocket: Pocket = this.pocketEdit.value;
    pocket.id = this.clickedPocketData.id;
    pocket.productId =
      this.activatedRoute.snapshot.paramMap.get('productId') || '1';
    this.service
      .updatePocket(pocket)
      .then((res) => {
        console.log(res);
        this.ngOnInit();
      })
      .catch((err) => console.log(err));
  }

  changeClickedPocketId(pocket: Pocket) {
    this.clickedPocketData = pocket;
  }
}
