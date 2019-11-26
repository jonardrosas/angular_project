import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NgbAlertConfig } from './../../modules/third_party_modules/ng_bootstrap';
import { AuthenticationService, LoginService} from './../services';
import { Alert, LoginCredentials } from './../models';
import { APP_CONFIG } from './../../configs';
import * as coreStore from './../store';
import { CookieService } from 'ngx-cookie-service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
    alert;
    nextUrl: string;
    appTheme = APP_CONFIG.APP_THEME;

    constructor(
        private authService: AuthenticationService,
        private logInService: LoginService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private store: Store<any>,
        private cookieService: CookieService
    ){}

    ngOnInit(){
        this.authenticate()
    }

    isAuthenticated(isLoggedIn){
        if(isLoggedIn){
            this.nextUrl = this.activatedRoute.snapshot.queryParams['next'] || '/home';
            this.router.navigateByUrl(this.nextUrl);
        }
    }

    invalidResponse(msg?): void{
        let message = 'Incorrect username or password';
        if(msg){
            message = msg;
        }
        this.alert = {message: message, type: 'warning'}
    }

    authenticate(){
        this.authService.authenticate('Login Component')
        this.authService.isAuthenticated
        .subscribe(
            data => this.isAuthenticated(data),
            err => this.invalidResponse(),
            () => alert('completed')
        )
    }

    onSubmit(credentials) {
        this.logInService.logIn(credentials)
            .subscribe(
                data => {
                    if(data.status == 'success'){
                        this.authenticate()
                    }else{
                        this.invalidResponse(data.msg)
                    }
                },
                err => this.invalidResponse(),
                () => console.log('finished')
            )
    }

}

