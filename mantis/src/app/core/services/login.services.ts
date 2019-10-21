import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { JwtAuthenticationService } from './auth_token.service';
import { CookieAuthenticationService } from './auth_cookie.service';
import { environment } from './../../../environments/environment';

@Injectable()
export class LoginService {
    private backend;
    private isProduction = environment.production;

    constructor(private apiService: ApiService) {
        if (this.isProduction) {
            this.backend = new CookieAuthenticationService(this.apiService);
        } else {
            this.backend = new JwtAuthenticationService(this.apiService);
        }
    }

    logIn(body): Observable<any> {
        return this.backend.attemptAuth(body)
    }

    logOut(): Observable<any> {
        return this.backend.logout()
    }

}
