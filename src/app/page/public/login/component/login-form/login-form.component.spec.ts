import { HttpClientModule } from '@angular/common/http';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { routes } from 'src/app/app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PublicComponent } from '../../../public.component';
import { LoginService } from '../../service/login/login.service';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [HttpClientModule, RouterModule.forRoot(routes)],
      providers: [LoginService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', fakeAsync(() => {
    tick(500);
    expect(component).toBeTruthy();
  }));

  it(
    'should show alert',
    waitForAsync(() => {
      component.userName = 'boy';
      component.password = 'men';

      component.clickLogin();
      fixture.detectChanges();
      fixture.whenStable().then(() => {
        // expect(location.pathname).toBe('/login');
      });
    })
  );
});
