import { Injectable } from '@angular/core';
import { APP_CONFIG } from './../../configs';

@Injectable()
export class JwtService {
    public access_key_token = APP_CONFIG.JWT_ACCESS_TOKEN;
    public refresh_key_token = APP_CONFIG.JWT_REFRESH_TOKEN;

    getToken(key): String {
        return window.localStorage[key];
    }

    saveToken(key, token: String) {
        window.localStorage[key] = token;
    }

    destroyToken(key) {
        window.localStorage.removeItem(key);
    }

}