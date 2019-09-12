// Angular  imports
import { Component, OnInit} from '@angular/core';

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
    private nav_type = APP_CONFIG.NAV_TYPE;  // default is bootstrap, but can switch to different type
    private tablist = [
        {name: 'Orc Worklist', url: 'orc/list'},
    ];

    constructor(private _service: AuthenticationService) {}

    ngOnInit() {
        this.authenticate();
    }

    authenticate(){
        this._service.authenticate(AuthenticationComponent)
    }

}



