import { HostBinding, Input } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBsNavbarBtn]',
})
export class BsNavbarBtnDirective {
  @Input() textColor: string = '';
  @Input() format: string = '';
  constructor() {}

  @HostBinding('class')
  get applyNavBtnStyle(): string {
    if (this.textColor == '') {
      this.textColor = 'text-dark';
    }
    return `nav-link ${this.textColor} ${this.format}`;
  }
}
