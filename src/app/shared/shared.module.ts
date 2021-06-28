import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsNavbarDirective } from './directive/ns-navbar/ns-navbar.directive';
import { BsNavbarBtnDirective } from './directive/bs-navbarBtn/bs-navbar-btn.directive';
import { DateNow } from './pipe/date-now-format/date-now.pipe';
import { TitlecasePipe } from './pipe/titlecase/titlecase.pipe';
import { CurrencyIDPipe } from './pipe/currency/currency-id.pipe';

@NgModule({
  declarations: [
    NsNavbarDirective,
    BsNavbarBtnDirective,
    DateNow,
    TitlecasePipe,
    CurrencyIDPipe,
  ],
  imports: [CommonModule],
  exports: [
    NsNavbarDirective,
    BsNavbarBtnDirective,
    DateNow,
    TitlecasePipe,
    CurrencyIDPipe,
  ],
})
export class SharedModule {}
