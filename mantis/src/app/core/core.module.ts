import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-cookie.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../modules/material/material.module';
import {
  AuthenticationService,
  ApiService,
  JwtService,
  JwtAuthenticationService,
  CookieAuthenticationService,
  //AuthGuard,
} from './services';

import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      NgbModule,
      ReactiveFormsModule,
      MaterialModule
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
  //declarations: []
  declarations: [LoginComponent, PageNotFoundComponent]
})

export class CoreModule { }