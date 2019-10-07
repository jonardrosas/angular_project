import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth-cookie.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import * as coreModuleStore from './store/';
import { MaterialModule } from './../modules/third_party_modules/material/material.module';
import { NgBootstrapModule } from './../modules/third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { SharedModule } from './../shared';
import {
  AuthenticationService,
  ApiService,
  JwtService,
  JwtAuthenticationService,
  CookieAuthenticationService,
  //AuthGuard,
} from './services';

import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      SharedModule,
      ReactiveFormsModule,
      MaterialModule,
      NgBootstrapModule,
      StoreModule.forFeature('core', coreModuleStore.reducers),
      EffectsModule.forFeature(coreModuleStore.effects)      
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
  declarations: [LoginComponent, PageNotFoundComponent, NavigationComponent],
  exports:[
        LoginComponent,
        PageNotFoundComponent,
        NavigationComponent
  ]
})

export class CoreModule { }