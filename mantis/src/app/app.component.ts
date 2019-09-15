// Angular  imports
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { take, map } from 'rxjs/operators';

// Third party import
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
        {name: 'Home', url: '/', icon: 'fas fa-home'},
        {name: 'Orc Worklist', url: 'orc/list'},
    ];

    constructor(
        private authService: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        //this.authenticate();
    }

    isAuthenticed(loggedIn){
        console.log('Mapping=', loggedIn)
        if(!loggedIn){
            this.router.navigate(['/login']);
        }
    }

    authenticate(){
        this.authService.authenticate('app component')
        /*if(!this.authService.isAuthenticated.pipe(take(1))){
            this.router.navigate(['/login']);
        }*/
        this.authService.isAuthenticated
        /*.pipe(
            map( n=> {
              console.log('Mapping=', n)
              return n
            })
        )*/
        .subscribe(
            data => this.isAuthenticed(data),
            err => alert(err),
            () => alert('completed')
        )
    }

}



