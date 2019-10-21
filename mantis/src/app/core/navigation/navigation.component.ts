// Angular imports
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, LoginService } from './../services';
import { APP_CONFIG } from './../../configs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    @Input() public tablist: string;
    @Input() public navType: string;
    public logo = APP_CONFIG.LOGO;
    public userInstance;

    constructor(
        private authService: AuthenticationService,
        private loginService: LoginService,
        private router: Router,
    ) {
        console.log("Navigation Component Instanced Created");
    }

    ngOnInit() {
        this.authService.currentUserSubject.subscribe(
            (data) => {
                this.userInstance = data;
            }
        );
    }

    logOut() {
        this.loginService.logOut()
        this.router.navigate(['/login']);
    }

}
