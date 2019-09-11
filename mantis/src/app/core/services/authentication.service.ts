import { Injectable } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { JwtAuthenticationService } from './auth_token.service';
import { CookieAuthenticationService } from './auth_cookie.service';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthenticationService {
    private  DJANGO_AUTH_URL: string = '/user_accounts/session_update/';
    private  JWT_AUTH_URL: string = 'user_accounts/get_session/';
    private  LOGIN_URL: string = '/accounts/login2/';
    private backend;
    private loginComponent;
    private isProduction = environment.production;

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(private apiService: ApiService, private modalService: NgbModal,	public config: NgbModalConfig){
      config.backdrop = 'static';
      config.keyboard = false;
    }

    authenticate(loginComponent){
        this.loginComponent = loginComponent;
        if(this.isProduction){
          this.backend = new CookieAuthenticationService(this.apiService);
          this.getSession();
        }else{
          this.backend = new JwtAuthenticationService(this.apiService);
          this.getSession();
        }
    }
	
    validateSession(data){
        console.log("Validation a session", data)
        if(data.response.status_code == 401){
          this.currentUserSubject.next({} as User);
          this.isAuthenticatedSubject.next(false);
          this.loginPopUp();
        }else{
          this.isAuthenticatedSubject.next(true);
          this.currentUserSubject.next(data.response);
          console.log("This is the current user", this.currentUserSubject.value);
        }
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    getSession(){
        console.log("Getting a session");
        this.backend.getSession()
        .subscribe(
            data => this.validateSession(data),
            err => this.loginPopUp(),
            //() => this.isAuthenticated()
        )
    }

    loginPopUp() {
        this.modalService.open(this.loginComponent);
    }

    validateLoginResponse(data){
        if(data.status == 'success'){
          this.getSession();
        }else{
          console.log("Login Response", data)
        }
    }

    logIn(body): Observable<any>{
        return this.backend.attemptAuth(body)
        /*.subscribe(
            data => this.getSession(),
            err => console.error(err),
            //() => this.isAuthenticated()
        )*/
    }

}
