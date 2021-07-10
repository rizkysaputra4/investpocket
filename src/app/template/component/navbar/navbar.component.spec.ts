import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [SharedModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have transparent navbar', () => {
    component.transparentNavbar = 'black';
    component.ngOnInit();
    expect(component.bgColor).toBe('bg-transparent');
    expect(component.navTextColor).toBe('text-light');
  });

  it('rendered', () => {
    component.transparentNavbar = 'black';
    component.onWindowScroll();
    component.ngOnInit();
    expect(component.bgColor).toBe('bg-transparent');
    expect(component.navTextColor).toBe('text-light');
  });
});
