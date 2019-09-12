// Angular imports
import { Component, OnInit, Input } from '@angular/core';
import { AuthenticationService } from './../services';
import { APP_CONFIG } from './../../configs';
import { AuthenticationComponent } from './../authentication/authentication.component';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit {
    @Input() tablist: string;
    @Input() nav_type: string;
    private logo = APP_CONFIG.LOGO;
    private userInstance;

    constructor(private authService: AuthenticationService){}

    ngOnInit() {
        this.authService.authenticate(AuthenticationComponent);
        this.authService.currentUserSubject.subscribe(
          (data) => this.setUserInstance(data)
        )
    }

    setUserInstance(data){
        return this.userInstance = data;
    }

    updateTablist(tablist){
        this.tablist = tablist;
    }

    logOut() {
        alert('logout');
        this.authService.logOut()
    }

}
