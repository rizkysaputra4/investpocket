import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  bgColor: string = 'bg-light';
  @Input() transparentNavbar: string = '';
  @Input() navTextColor: string = '';

  constructor() {}
  public isCollapsed = false;
  ngOnInit(): void {
    if (this.transparentNavbar != '') {
      this.bgColor = 'bg-transparent';
      this.navTextColor = 'text-light';
    }
  }

  @HostListener('window:scroll', []) onWindowScroll() {
    // do some stuff here when the window is scrolled
    const verticalOffset =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (this.transparentNavbar != '') {
      if (verticalOffset > 50) {
        this.bgColor = 'bg-light';
        this.navTextColor = 'text-dark';
      } else {
        this.bgColor = 'bg-transparent';
        this.navTextColor = 'text-light';
      }
    }
  }
}
