import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './page/home/home.module';
import { LoginComponent } from './page/login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
