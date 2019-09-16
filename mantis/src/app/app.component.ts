// Angular  imports
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { take, map } from 'rxjs/operators';

// Third party import
import { CookieService } from 'ngx-cookie-service';

// Internall Apps
import { APP_CONFIG } from './configs';
import { AuthenticationService } from './core/services';
import { environment } from './../environments/environment';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})


export class AppComponent{
    private title = APP_CONFIG.TITLE;
    public nav_type = APP_CONFIG.NAV_TYPE;  // default is bootstrap, but can switch to different type
    public tablist = [
        {name: 'Home', url: '/', icon: 'fas fa-home'},
        {name: 'Orc Worklist', url: 'orc/list'},
    ];

    constructor() {}

}



