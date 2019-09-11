import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { map ,  distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class CookieAuthenticationService {
    private  AUTH_URL: string = '/user_accounts/session_update/';
    private  LOGIN_URL: string = '/accounts/login2/';

    constructor(private apiService: ApiService){
        console.log("You are using a cookie based authentication");
    }

    getSession(): Observable<any>{
        console.log('get session cookie base');
        return this.apiService.get(this.AUTH_URL)
    }

    attemptAuth(body): Observable<any>{
        return this.apiService.post(this.LOGIN_URL, body)
    }


}
