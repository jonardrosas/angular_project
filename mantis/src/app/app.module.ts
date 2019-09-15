// Angular core module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Third party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

// Local imports
import { APP_CONFIG } from './configs';
import { CoreModule } from './core/core.module';
import { LoginRequired }  from './core/guards'
import { AuthenticationService }  from './core/services'
import { OrcModule } from './modules/orc/orc.module';
import { HomeModule } from './modules/home/home.module';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AuthenticationComponent } from './core/authentication/authentication.component';
import { SharedModule } from './shared/shared.module';
import { BootstrapNavigationComponent } from './shared/components/bootstrap-navigation';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        AuthenticationComponent,
        BootstrapNavigationComponent
    ],
    imports: [
        BrowserModule,
        CoreModule,
        SharedModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientXsrfModule.withOptions({
            cookieName: APP_CONFIG.CSRF_COOKIE_NAME,
            headerName: APP_CONFIG.CSRF_HEADER_NAME
        }),
        OrcModule,
        HomeModule
    ],
    entryComponents: [AuthenticationComponent],
    providers: [
        CookieService, LoginRequired, AuthenticationService
      ],
    bootstrap: [AppComponent]
})


export class AppModule { }
