import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { APP_CONFIG } from './../../../configs';

@Component({
  selector: 'app-bootstrap-navigation',
  templateUrl: './bootstrap-navigation.component.html',
  styleUrls: ['./bootstrap-navigation.component.css']
})


export class BootstrapNavigationComponent implements OnInit {
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

    constructor(){}

    ngOnInit() {
    }

    logOut() {
        this.logout.emit(true);
    }


}
