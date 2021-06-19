import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  userName: string = '';
  password: string = '';

  constructor() {}

  loggedIn(userName: string, password: string): boolean {
    if (userName == 'boymen' && password == 'boymen') {
      sessionStorage.setItem('userName', userName);
      sessionStorage.setItem('password', password);
      return true;
    }
    alert('try email: boymen, password: boymen');
    return false;
  }
}
