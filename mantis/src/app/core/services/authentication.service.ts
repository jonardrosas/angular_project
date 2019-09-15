import { Injectable } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { Router } from '@angular/router'
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models';
import { JwtAuthenticationService } from './auth_token.service';
import { CookieAuthenticationService } from './auth_cookie.service';
import { map ,  distinctUntilChanged, take, catchError } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable()
export class AuthenticationService {
    private backend;
    private isProduction = environment.production;
    public currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());
    public isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();
    public unAuthorizedResponseSubject = new BehaviorSubject<any>({response: {status_code: 401}});

    constructor(private apiService: ApiService, private router: Router){
        console.log("Authentication Service Created.")
        if(this.isProduction){
            this.backend = new CookieAuthenticationService(this.apiService);
        }else{
            this.backend = new JwtAuthenticationService(this.apiService);
        }
        this.authenticate('Authenticate Service')
    }

    authenticate(source){
        console.log("Authenticate method called from ", source);
        this.backend.getSession()
        .subscribe(
            data => this.validateSession(data),
            err => this.errorResponseHander()
        )
    }

    setUnAuthorized(){
        this.currentUserSubject.next({} as User);
        this.isAuthenticatedSubject.next(false);
    }

    setAuthorized(data){
        this.currentUserSubject.next(data.response);
        this.isAuthenticatedSubject.next(true);
    }
	
    validateSession(data){
        if(data.response.status_code == 401){
            this.setUnAuthorized()
        }else{
            this.setAuthorized(data)
        }
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    /*
     *  If backend is CookieAuthenticationService
     * 403 error will execute incase no csrf token (403 forbidden repsonse)
     *
     */
    errorResponseHander(){
        this.setUnAuthorized()
    }

    getSession(): Observable<any>{
        console.log('Get session')
        return this.backend.getSession().pipe(
            catchError(val => {
                return this.unAuthorizedResponseSubject;  // dont send error to the subscriber, so that auth guard can handle it
            })
        );

    }

    logIn(body): Observable<any>{
        return this.backend.attemptAuth(body)
    }

    logOut(){
        this.backend.logout().subscribe(
            (data) => console.log("Logging out")
        )
        this.setUnAuthorized()
        this.router.navigate(['/login']);
    }

}
