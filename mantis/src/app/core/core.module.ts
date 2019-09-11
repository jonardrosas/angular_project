import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-cookie.interceptor';

import {
  AuthenticationService,
  ApiService,
  JwtService,
  JwtAuthenticationService,
    CookieAuthenticationService,  
  //AuthGuard,
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ApiService,
    AuthenticationService,
    JwtService,
    JwtAuthenticationService,
    CookieAuthenticationService,
    //AuthGuard
  ],
  declarations: []
})

export class CoreModule { }