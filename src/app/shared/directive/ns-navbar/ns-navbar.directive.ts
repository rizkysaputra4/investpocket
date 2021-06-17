import { Input } from '@angular/core';
import { HostBinding, HostListener } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appNsNavbar]',
})
export class NsNavbarDirective {
  @Input() bgColor: string = '';
  color: string = 'navbar-light';
  scrollPosition?: number;

  constructor() {}

  @HostBinding('class')
  get applyNavStyle(): string {
    return `navbar navbar-expand-lg navbar-light ${this.bgColor} fixed-top`;
  }
}
