import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import {  JwtService} from './jwt.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { APP_CONFIG, URLS  } from './../../configs';

@Injectable()
export class JwtAuthenticationService {
    private  AUTH_URL: string = URLS.JWT_BASED_GET_SESSION;
    private  LOGIN_URL: string = URLS.JWT_BASED_LOGIN_URL;
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
                err => this.logout()
              );
        } else {
            return this.logout();
        }
    }
	
    setAuth(resp) {
        this.jwtService.saveToken(this.access_key_token, resp.access);
    }

    logout() {
        this.jwtService.destroyToken(this.access_key_token);
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
