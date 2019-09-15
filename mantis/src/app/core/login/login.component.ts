import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { take } from 'rxjs/operators';
import { AuthenticationService } from './../services';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
    public loginForm;

    constructor(
        private authService: AuthenticationService,
        public formBuilder: FormBuilder,
        private router: Router,
        private activatedRoute: ActivatedRoute,
    ){
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
        alert('Please fill in username and password');
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

