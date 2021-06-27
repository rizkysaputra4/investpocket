import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
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

  getPocketList(): Promise<any> {
    return fetch(`${environment.apiSource}pocket`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  deletePocket(id: string): Promise<any> {
    return fetch(`${environment.apiSource}pocket/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }

  updatePocket(pocket: Pocket): Promise<any> {
    return fetch(`${environment.apiSource}pocket/${pocket.id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pocket),
    })
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }
}
