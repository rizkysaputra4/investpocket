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

  loggedIn(userName: string, password: string): Promise<any> {
    return fetch(`${environment.apiSource}user?userName=${userName}`)
      .then((res) => {
        return res.json();
      })
      .catch((err) => console.log(err));
  }
}
