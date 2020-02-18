import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { URLS } from './../../configs';

@Injectable()
export class CookieAuthenticationService {
    private  AUTH_URL: string = URLS.COOKIE_BASED_GET_SESSION;
    private  LOGIN_URL: string = URLS.COOKIE_BASED_LOGIN_URL;
    private  LOGOUT_URL: string = URLS.COOKIE_BASED_LOGOUT_URL;

    constructor(private apiService: ApiService){
        console.log("You are using a cookie based authentication");
    }

    getSession(): Observable<any>{
        return this.apiService.get(this.AUTH_URL)
    }

    attemptAuth(body): Observable<any>{
        return this.apiService.post(this.LOGIN_URL, body)
    }
    
    logout(): Observable<any> {
        return this.apiService.post(this.LOGOUT_URL)
    }
    


}
