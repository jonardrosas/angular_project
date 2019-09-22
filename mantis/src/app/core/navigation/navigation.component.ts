// Angular imports
import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './../services';
import { APP_CONFIG } from './../../configs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    @Input() tablist: string;
    @Input() navType: string;
    public logo = APP_CONFIG.LOGO;
    public userInstance;

    constructor(private authService: AuthenticationService){
        console.log("Navigation Component Instanced Created");
    }

    ngOnInit() {
        this.authService.currentUserSubject.subscribe(
            (data) => this.setUserInstance(data)
        );
    }

    setUserInstance(data){
        console.log("There's a data", data);
        return this.userInstance = data;
    }

    logOut() {
        return this.authService.logOut();
    }

}
