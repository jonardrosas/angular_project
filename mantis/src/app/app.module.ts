// Angular core module

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Third party imports
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

// Local imports
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/navigation/navigation.component';
import { AuthenticationComponent } from './core/authentication/authentication.component'

@NgModule({
  declarations: [
      AppComponent,
      NavigationComponent,
      AuthenticationComponent
  ],
  imports: [
      BrowserModule,
      CoreModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      NgbModule,
      HttpClientXsrfModule.withOptions({
          cookieName: 'mantis3_token',
          headerName: 'X-CSRFToken',
      }),
  ],
  entryComponents: [AuthenticationComponent],
  providers: [
      CookieService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
