import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './component/login-form/login-form.component';
import { LoginComponent } from './login.component';
import { ToRegisterComponent } from './component/to-register/to-register.component';
import { LoginService } from './service/login/login.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [LoginFormComponent, LoginComponent, ToRegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    HttpClientModule,
  ],
  exports: [LoginFormComponent, LoginComponent],
  providers: [LoginService],
})
export class LoginModule {}
