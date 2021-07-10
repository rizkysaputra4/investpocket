import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ActivatedRouteSnapshot, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';

import { RouteGuard } from './route.guard';

describe('RouteGuard', () => {
  let guard: RouteGuard;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [],
    });

    guard = TestBed.inject(RouteGuard);
    router = TestBed.inject(Router);

    router.initialNavigation();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return false', () => {
    let routerStateMock: any = {
      snapshot: {},
      url: '/p/profile',
    };
    let routerMock: any = {
      navigate: jasmine.createSpy('navigate'),
    };

    guard.canActivate(routerMock, routerStateMock);
    expect(router.url).toBe('/');
  });
});
