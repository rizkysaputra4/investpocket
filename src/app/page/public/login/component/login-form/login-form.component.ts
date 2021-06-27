import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

    let isCorrect = this.loginService.loggedIn(this.userName, this.password);
    if (isCorrect) {
      this.router.navigate(['']);
    }

    let login = this.loginService.loggedIn(this.userName, this.password);

    login.subscribe(
      (data) => {
        console.log('data sended');
        console.log(data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
