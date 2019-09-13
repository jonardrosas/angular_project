// Angular  imports
import { Component, OnInit} from '@angular/core';
import { take, map } from 'rxjs/operators';

// Third party import
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';

// Internall Apps
import { APP_CONFIG } from './configs';
import { AuthenticationService } from './core/services';
import { AuthenticationComponent } from './core/authentication/authentication.component'
import { environment } from './../environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
    private title = APP_CONFIG.TITLE;
    public nav_type = APP_CONFIG.NAV_TYPE;  // default is bootstrap, but can switch to different type
    public tablist = [
        {name: 'Orc Worklist', url: 'orc/list'},
    ];

    constructor(private authService: AuthenticationService, private modalService: NgbModal,	public config: NgbModalConfig) {
        config.backdrop = 'static';
        config.keyboard = false;
    }

    ngOnInit() {
        this.authenticate();
    }

    isAuthenticed(loggedIn){
        if(!loggedIn){
            this.loginPopUp();
        }
    }

    authenticate(){
        this.authService.authenticate('app component')
        this.authService.isAuthenticated
        .pipe(
            map( n=> {
              console.log('Mapping=', n)
              return n
            })
        )
        .subscribe(
            data => this.isAuthenticed(data),
            err => alert(err),
            () => alert('completed')
        )
    }

    loginPopUp() {
        if(!this.modalService.hasOpenModals()){
            // prevent opening multiple modals
            this.modalService.open(AuthenticationComponent);
        }
    }

}



