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
    private title: string = APP_CONFIG.TITLE;
    appTheme: string = APP_CONFIG.APP_THEME;  // default is bootstrap, but can switch to different type
    navType: string;
    tablist = [
       // {name: 'Home', url: '/', icon: 'fas fa-home'},
        {name: 'General List', url: 'orc/list'},
    ];

    constructor() {
        // There are 2 type of material nav,
        // 1. material-sidenav
        // 2. normal material nav
        if(this.appTheme.includes('material')){
            this.navType = APP_CONFIG.MAT_DEFAULT_NAVIGATION;
        }
    }

    addTabToList(tab){
        this.tablist.push(tab)
    }

    updateTab(tablist){
        this.tablist = tablist;
    }

    updateTheme(theme){
        this.appTheme = theme;
    }


}



