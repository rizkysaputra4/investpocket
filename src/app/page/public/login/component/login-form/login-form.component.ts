import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../model/User';
import { LoginService } from '../../service/login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  userName: string = '';
  password: string = '';
  loginPlatform: string[] = [
    'facebook-round.svg',
    'google.svg',
    'apple.svg',
    'linkedin.svg',
  ];

  constructor(
    private readonly loginService: LoginService,
    private router: Router
  ) {}

  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {}

  clickLogin() {
    this.userName = this.loginForm.value.userName;
    this.password = this.loginForm.value.password;

    let login = this.loginService.loggedIn(this.userName, this.password);

    login
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
          if (
            data[i].userName == this.userName &&
            data[i].password == this.password
          ) {
            this.router.navigate(['']);
            sessionStorage.setItem(
              'credentials',
              JSON.stringify({ token: 'This is a token' })
            );
            return;
          }
        }
        alert('try username: boymen, password: boymen');
      })
      .catch((err) => console.log(err));
  }
}
