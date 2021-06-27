import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
    return this.http.get(`${environment.apiSource}user?userName=${userName}`);
  }
}
