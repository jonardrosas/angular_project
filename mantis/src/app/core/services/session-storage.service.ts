import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { JwtAuthenticationService } from './auth_token.service';
import { CookieAuthenticationService } from './auth_cookie.service';
import { environment } from './../../../environments/environment';
import { APP_CONFIG } from './../../configs';

@Injectable()
export class SessionStorageService {

    constructor(private apiService: ApiService) {
    }

    getACLGid() {
        return window.sessionStorage[APP_CONFIG.ACL_GID_KEY]
    }

}
