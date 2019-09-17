import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from './../services';
import { Alert } from './../models';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [NgbAlertConfig],
})


export class LoginComponent implements OnInit {
    public loginForm;
    public alerts: Alert[] = [];

    constructor(
        private authService: AuthenticationService,
        public formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        public alertConfig: NgbAlertConfig
    ){
        alertConfig.dismissible = false;
        this.loginForm = this.formBuilder.group({
            username: '',
            password: ''
        });

    }

    ngOnInit(){
        this.authenticate()
    }

    isAuthenticated(isLoggedIn){
        if(isLoggedIn){
            this.activatedRoute.queryParams.subscribe(params => {
                  let next = params['next'];
                  if(next){
                      let decodedParams =  decodeURIComponent(next);
                      this.router.navigate([decodedParams]);
                  }else{
                      this.router.navigate(['/home']);
                  }
            });            
           // this.router.navigate(['/home']);
        }
    }

    invalidResponse(){
        debugger;
        this.alerts.push({message: 'Incorrect username or password', type: 'warning'});
        //this.alerts.push({type: 'danger', message: 'Incorrect username or password'});
        // alert('Please fill in username and password');
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

    onSubmit() {
        const credentials = this.loginForm.value;
        this.authService.logIn(credentials)
            .subscribe(
                data => this.authenticate(),
                err => this.invalidResponse(),
                () => console.log('finished')
            )
    }

}

