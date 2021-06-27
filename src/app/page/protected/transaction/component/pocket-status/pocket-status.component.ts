import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../service/transaction.service';

@Component({
  selector: 'app-pocket-status',
  templateUrl: './pocket-status.component.html',
  styleUrls: ['./pocket-status.component.scss'],
})
export class PocketStatusComponent implements OnInit {
  pocket: FormGroup = new FormGroup({});

  constructor(private readonly service: TransactionService) {}

  ngOnInit(): void {
    this.pocket = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      price: new FormControl(0),
      qty: new FormControl(0),
    });
  }

  onSubmit(): void {
    let submit = this.service.addPocket(this.pocket.value);

    submit.then((data) => console.log(data)).catch((err) => console.log(err));
  }
}
