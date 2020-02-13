// Angular imports
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, LoginService, SessionStorageService } from './../services';
import { Group  } from './../../core/models/groups';
import { APP_CONFIG } from './../../configs';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent implements OnInit, OnDestroy {
    @Input() public tablist: string;
    @Input() public navType: string;
    public logo = APP_CONFIG.LOGO;
    public userInstance;
    public groupIns;
    public currentUser;
    public selectedGroup = {name: null, id: null};
    public groupInsSubscription$: Subscription;
    public currentUserSubscription: Subscription;
    public groups;

    constructor(
        private authService: AuthenticationService,
        private loginService: LoginService,
        private router: Router,
        private sessionStorage: SessionStorageService
    ) {
        console.log("Navigation Component Instanced Created");
    }

    ngOnInit() {
        this.authService.currentUserSubject.subscribe(
            (data) => {
                this.userInstance = data;
            }
        );
        this.groupIns = new Group();
        this.getGroups()
        this.currentUserSubscription = this.authService.currentUserSubject.subscribe(
           (data) => {
               if(data[APP_CONFIG.ACL_GID_KEY]){
                   this.currentUser = data;
               }
           }   
        )
    }

    ngOnDestroy(){
        this.groupInsSubscription$.unsubscribe()
        this.currentUserSubscription.unsubscribe()
    }        

    getGroups(term?){
        let params = {limit: 100, ordering: 'name'}
        if(term){
            params['search'] = term
        }
        this.groupInsSubscription$ = this.groupIns.objects.filter(params)
        .subscribe(
            (data) => {
                this.groups = data
                this.currentUserSubscription = this.authService.currentUserSubject.subscribe(
                    (data) => {
                        if(data[APP_CONFIG.ACL_GID_KEY]){
                            for(let group of this.groups){
                                if(group.id == data[APP_CONFIG.ACL_GID_KEY]){
                                     this.selectedGroup = group;
                                     break;
                                }
                            }
                        }
                    }   
                )
            },
            (err) => console.log('No groups')
        )
    }      

    logOut() {
        this.loginService.logOut().subscribe(
            (data) => {
                this.router.navigate(['/login']);
            }
        )
    }


    setAclGid(selectedGroup){
        return this.authService.setACLGid(selectedGroup.id).subscribe(
            (data) => {
                debugger;
            }
        )
    }


}
