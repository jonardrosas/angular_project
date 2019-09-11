import { Injectable } from '@angular/core';

@Injectable()
export class JwtService {
    public access_key_token: string = 'access';
    public refresh_key_token: string = 'refresh';

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