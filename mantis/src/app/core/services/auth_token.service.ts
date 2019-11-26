import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import {  JwtService} from './jwt.service';
import { User } from '../models';
import { map ,  distinctUntilChanged } from 'rxjs/operators';
import { APP_CONFIG, URLS  } from './../../configs';
/*
 *For Development Only
 *
 */
@Injectable()
export class JwtAuthenticationService {
    private  AUTH_URL: string = URLS.JWT_BASED_GET_SESSION;
    private  LOGOUT_URL: string = URLS.JWT_BASED_LOGOUT_URL;
    private  LOGIN_URL: string = URLS.JWT_BASED_LOGIN_URL;
    private jwtService;
    private access_key_token = APP_CONFIG.JWT_ACCESS_TOKEN;
    private refresh_key_token = APP_CONFIG.JWT_REFRESH_TOKEN;
    public dummyLogoutSubjet = new BehaviorSubject<any>({});

    constructor( private apiService: ApiService){
        this.jwtService = new JwtService();
        console.log("You are using a token authentication");
    }

    getSession():Observable<any>{
        return this.apiService.get(this.AUTH_URL);
    }

    setAuth(resp) {
        this.jwtService.saveToken(this.access_key_token, resp.access);
    }

    logout():Observable<any> {
        this.jwtService.destroyToken(this.access_key_token);
        return this.apiService.post(this.LOGOUT_URL);
    }
    
    attemptAuth(credentials): Observable<any> {
        return this.apiService.post(this.LOGIN_URL, credentials)
            .pipe(map(
                data => {
                    this.setAuth(data);
                    return data;
                },
            ));
    }    


}
