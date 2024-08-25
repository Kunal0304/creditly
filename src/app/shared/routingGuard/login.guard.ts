import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class LoginGuard implements CanActivate {

    constructor(
        private router: Router
    ) {
    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
            if (!localStorage.getItem('sessionToken')) {
              return true;
            } else {
              this.router.navigateByUrl('/userProfile');
              return false;
            }
    }
  }
