import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NsNavbarDirective } from './directive/ns-navbar/ns-navbar.directive';
import { BsNavbarBtnDirective } from './directive/bs-navbarBtn/bs-navbar-btn.directive';

@NgModule({
  declarations: [NsNavbarDirective, BsNavbarBtnDirective],
  imports: [CommonModule],
  exports: [NsNavbarDirective, BsNavbarBtnDirective],
})
export class SharedModule {}
