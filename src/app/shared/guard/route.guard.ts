import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RouteGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {}

  protected authorize(
    activatedRoute: ActivatedRouteSnapshot,
    activatedState: RouterStateSnapshot
  ): boolean {
    const credentials = sessionStorage.getItem('credentials');
    console.log(credentials);
    if (!credentials) {
      sessionStorage.setItem('redirectBackUrl', activatedState.url);
      this.router.navigateByUrl('/login');
    }

    return true;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.authorize(route, state);
  }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    return this.authorize(childRoute, state);
  }
}
