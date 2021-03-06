// Angular core module
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Third party imports
import { CookieService } from 'ngx-cookie-service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MaterialModule } from './modules/third_party_modules/material/material.module';
import { NgBootstrapModule } from './modules/third_party_modules/ng_bootstrap/ng_bootstrap.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Local imports
import { APP_CONFIG } from './configs';
import { CoreModule, LoginRequired,  AuthenticationService } from './core';
import { SharedModule } from './shared';
import * as orcModuleStore from './modules/internal_modules/orc/store';
import { OrcModule } from './modules/internal_modules/orc/orc.module';
import { HomeModule } from './modules/internal_modules/home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        HttpClientXsrfModule.withOptions({
            cookieName: APP_CONFIG.CSRF_COOKIE_NAME,
            headerName: APP_CONFIG.CSRF_HEADER_NAME
        }),
        NgBootstrapModule,
        MaterialModule,
        OrcModule,
        HomeModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot(orcModuleStore.effects)
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        CookieService,
        LoginRequired,
        AuthenticationService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
    ],
    bootstrap: [AppComponent]
})


export class AppModule { }
