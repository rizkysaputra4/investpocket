import { Component, OnInit } from '@angular/core';
import Transaction from '../../model/Transaction';
import { ProfileService } from '../../service/profile.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class HistoryComponent implements OnInit {
  transactionList: Transaction[] = [];

  constructor(private readonly service: ProfileService) {}

  ngOnInit(): void {
    this.service.getTransactionHistory().subscribe(
      (data: Transaction[]) => {
        this.transactionList = data;
      },
      (err) => console.log(err)
    );
  }
}
