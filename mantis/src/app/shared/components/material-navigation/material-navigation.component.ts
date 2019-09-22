import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, RouterStateSnapshot } from '@angular/router';
import { APP_CONFIG } from './../../../configs';

@Component({
  selector: 'app-material-navigation',
  templateUrl: './material-navigation.component.html',
  styleUrls: ['./material-navigation.component.css']
})


export class MaterialNavigationComponent implements OnInit {
    @Input() tablist: string[];
    @Input() logo: string[];
    @Output() logout = new EventEmitter<boolean>();
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

    constructor(private router: Router){}

    ngOnInit() {
    }

    navigate(url){
        this.router.navigate([url]);
    }

    logOut() {
        this.logout.emit(true);
    }


}

