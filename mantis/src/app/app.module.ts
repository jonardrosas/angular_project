// Angular core module
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Third party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { DataTablesModule } from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

// Local imports
import { APP_CONFIG } from './configs';
import { CoreModule } from './core/core.module';
import { LoginRequired }  from './core/guards'
import { AuthenticationService }  from './core/services'
import { OrcModule } from './modules/orc/orc.module';
import { NgDatatableWrapperModule } from './modules/ng-datatable-wrapper/ng-datatable-wrapper.module';
import { HomeModule } from './modules/home/home.module';
import { NavigationComponent } from './core/navigation/navigation.component';
import { SharedModule, BootstrapNavigationComponent } from './shared';
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
        NgbModule,
        HttpClientXsrfModule.withOptions({
            cookieName: APP_CONFIG.CSRF_COOKIE_NAME,
            headerName: APP_CONFIG.CSRF_HEADER_NAME
        }),
        DataTablesModule,
        NgDatatableWrapperModule,
        OrcModule,
        HomeModule
    ],
    declarations: [
        AppComponent,
        NavigationComponent,
        BootstrapNavigationComponent,
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
