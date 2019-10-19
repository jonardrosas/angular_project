import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { NgbAlertConfig } from './../../modules/third_party_modules/ng_bootstrap';
import { AuthenticationService } from './../services';
import { Alert } from './../models';
import { APP_CONFIG } from './../../configs';


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
        private router: Router,
        private activatedRoute: ActivatedRoute,
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

    invalidResponse(){
        this.alert = {message: 'Incorrect username or password', type: 'warning'}
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
        // const credentials = this.loginForm.value;
        this.authService.logIn(credentials)
            .subscribe(
                data => this.authenticate(),
                err => this.invalidResponse(),
                () => console.log('finished')
            )
    }

}

