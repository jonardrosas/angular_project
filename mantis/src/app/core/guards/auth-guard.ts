import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs'

import { AuthenticationService } from '../services';

@Injectable()
export class CanActivateTeam implements CanActivate {

  constructor(private authService: AuthenticationService){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
      debugger;
      return this.authService.isAuthenticated.pipe(take(1));
  }
}
