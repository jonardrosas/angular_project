import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import {  JwtService} from './jwt.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class JwtAuthenticationService {
    private AUTH_URL: string = '/user_accounts/get_session/';
    private LOGIN_URL: string = '/jwt_api/token/';
    private jwtService;
    private access_key_token: string = 'access';
    private refresh_key_token: string = 'refresh';

    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor( private apiService: ApiService){
        this.jwtService = new JwtService();
        console.log("You are using a token authentication");
    }

    getSession():Observable<any>{
        return this.apiService.get(this.AUTH_URL);
    }

    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
        // If JWT detected, attempt to get & store user's info
        if (this.jwtService.getToken(this.access_key_token)) {
            return this.apiService.get(this.AUTH_URL)
              .subscribe(
                data => this.setAuth(data),
                err => this.purgeAuth()
              );
        } else {
            return this.purgeAuth();
        }
    }
	
    setAuth(resp) {
        console.log("Login Response", resp);
        this.jwtService.saveToken(this.access_key_token, resp.access);
    }

    purgeAuth() {
        this.jwtService.destroyToken(this.access_key_token);
        return this.apiService.get(this.AUTH_URL);
    }

    /*
    attemptAuth(body): Observable<any>{
        return this.apiService.post(this.LOGIN_URL, body)
            .subscribe(
              data => this.setAuth(data),
              err => this.purgeAuth()
            );
    }
    */

    attemptAuth(credentials): Observable<any> {
        return this.apiService.post(this.LOGIN_URL, credentials)
            .pipe(map(
                data => {
                    this.setAuth(data);
                    return data;
                }
            ));
    }    

    // Update the user on the server (email, pass, etc)
    update(user){
        console.log('User');
    }


}
