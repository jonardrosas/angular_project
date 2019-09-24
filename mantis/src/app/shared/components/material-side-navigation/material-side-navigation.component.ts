import { Component, OnInit, Output, Input, EventEmitter  } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { APP_CONFIG } from './../../../configs';

@Component({
  selector: 'app-material-side-navigation',
  templateUrl: './material-side-navigation.component.html',
  styleUrls: ['./material-side-navigation.component.css']
})
export class MaterialSideNavigationComponent {
    @Input() public tablist: string[];
    @Input() public logo: string[];
    @Output() public logout = new EventEmitter<boolean>();
    private _userInstance;
    public media_url = APP_CONFIG.MEDIA_URL;
    public defaultProfileImg = APP_CONFIG.DEFAULT_PROFILE_IMG;


    @Input() set userInstance(value: any) {
       this._userInstance = value;
    }

    get userInstance(): any {
        if(this._userInstance.user_profile_img_url){
          this.defaultProfileImg = this.media_url + this._userInstance.user_profile_img_url;
        }
        return this._userInstance;
    }

    constructor(private breakpointObserver: BreakpointObserver, private router: Router){}
    
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
          map(result => result.matches),
          shareReplay()
        );




    ngOnInit() {
    }
    
    navigate(url){
        this.router.navigate([url]);
    }
    

    logOut() {
        this.logout.emit(true);
    }
  

  
  
  
}
