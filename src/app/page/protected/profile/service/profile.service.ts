import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Transaction from '../model/Transaction';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor(private readonly http: HttpClient) {}

  getTransactionHistory(): Observable<Transaction[]> {
    return this.http.get(`${environment.apiSource}/transaction`).pipe(
      retry(3),
      map((res: any) => {
        return res;
      })
    );
  }
}
