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
    private _userInstance: any;
    private base_url = APP_CONFIG.BASE_URL;

    @Input() set userInstance(value: any) {
       this._userInstance = value;
    }

    get userInstance(): any {
        return this._userInstance;
    }

    constructor(){}

    ngOnInit() {
    }

    logOut() {
        this.logout.emit(true);
    }


}
