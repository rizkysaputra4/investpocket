import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName: string = '';
  password: string = '';

  constructor(private readonly http: HttpClient) {}

  loggedIn(userName: string, password: string): Observable<any> {
    return this.http
      .get(`${environment.api}api/user?userName=${userName}`)
      .pipe(
        retry(2),
        map((data) => {
          return data;
        })
      );
  }
}
