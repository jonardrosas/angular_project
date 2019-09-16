import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { JwtService } from './../services';
import { environment } from './../../../environments/environment';
import { APP_CONFIG } from './../../configs';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private jwtService: JwtService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!environment.production){
        // Clone the request and replace the original headers with
        // cloned headers, updated with the authorization.
        const token = this.jwtService.getToken(this.jwtService.access_key_token);
        const authReq = req.clone({
            setHeaders: {
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization': `${APP_CONFIG.AUTHORIZATION_TYPE} ${token}`,
            }
        });
        return next.handle(authReq);
    }else{
        return next.handle(req);
    }
  }
}
