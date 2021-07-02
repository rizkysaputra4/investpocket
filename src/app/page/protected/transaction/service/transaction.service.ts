import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Pocket } from '../model/Pocket';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private readonly http: HttpClient) {}

  addPocket(pocket: Pocket): Observable<any> {
    return this.http.post(`${environment.apiSource}pocket`, pocket).pipe(
      retry(3),
      map((res: any) => {
        return res;
      })
    );
  }

  getPocketList(): Observable<any> {
    return this.http.get(`${environment.apiSource}pocket`).pipe(
      retry(3),
      map((res: any) => {
        return res;
      })
    );
  }

  deletePocket(id: string): Observable<any> {
    return this.http.delete(`${environment.apiSource}pocket/${id}`).pipe(
      retry(5),
      map((data: any) => {
        return data;
      })
    );
  }

  updatePocket(pocket: Pocket): Observable<any> {
    return this.http
      .put(`${environment.apiSource}pocket/${pocket.id}`, pocket)
      .pipe(
        retry(3),
        map((res: any) => {
          return res;
        })
      );
  }

  makeDeal(product: any): Observable<any> {
    return this.http.post(`${environment.apiSource}transaction`, product).pipe(
      retry(3),
      map((data: any) => {
        return data;
      })
    );
  }

  getPriceList(product: string): Observable<any> {
    return this.http.get(`${environment.priceSource}/price/${product}`).pipe(
      retry(3),
      map((data: any) => {
        return data;
      })
    );
  }

  getData(product: string): Observable<any> {
    return this.http.get(`${environment.priceSource}/price/${product}`).pipe(
      retry(3),
      map((data: any) => {
        return data;
      })
    );
  }
}
