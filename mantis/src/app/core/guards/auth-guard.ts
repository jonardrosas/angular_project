import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs'

import { AuthenticationService } from '../services';

@Injectable()
export class LoginRequired implements CanActivate {

  constructor(private authService: AuthenticationService, private router: Router){}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean>  {
      // need to always pull the latest sesion from server, because we need to update the
      // current page incase  user logs out to other tab. Current tab cannot detect other tab
      // events unless you check the browser local storage.
      // But we dont store local storage on production environment.
      // For development environment, yes its possible because we use JWT, but we need
      // to make it compatible to both environment
      return this.authService.getSession()
          .pipe(
              map(data => {
                    if (data.response.status_code == 401) {
                        if(state.url == '/login'){
                            this.router.navigate(['/login']);
                        }else{
                            this.router.navigate(['/login'], {queryParams: {next: state.url}});
                        }
                        //this.router.navigate(['/login', {queryParams: {next: state.url}}]);
                        return false;
                    }
                    return true;
              })
          );
  }
}
