import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pocket } from '../model/Pocket';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor() {}

  addPocket(pocket: Pocket): Promise<any> {
    return fetch(`${environment.apiSource}pocket`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pocket),
    }).then((data) => {
      return data.json();
    });
  }
}
