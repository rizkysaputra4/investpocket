import { HostBinding, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBsNavbarBtn]',
})
export class BsNavbarBtnDirective {
  @Input() textColor: string = 'text-dark';

  constructor() {}

  @HostBinding('class')
  get applyNavBtnStyle(): string {
    return `nav-link ${this.textColor}`;
  }
}
