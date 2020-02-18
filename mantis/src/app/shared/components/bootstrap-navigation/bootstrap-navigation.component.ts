import { Component, OnInit, Output, Input, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { Subject, Observable, merge } from 'rxjs';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { APP_CONFIG } from './../../../configs';
import { Group, GroupInterface  } from './../../../core/models';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-bootstrap-navigation',
  templateUrl: './bootstrap-navigation.component.html',
  styleUrls: ['./bootstrap-navigation.component.css']
})


export class BootstrapNavigationComponent implements OnInit {
    @Input() tablist: string[];
    @Input() logo: string[];
    @Output() logout = new EventEmitter<boolean>();
    @Output() setAclGid = new EventEmitter<Group>(); 
    private _userInstance;
    @Input() groups;
    @Input() selectedGroup: Group;
    public media_url = APP_CONFIG.MEDIA_URL;
    public defaultProfileImg = APP_CONFIG.DEFAULT_PROFILE_IMG;
    @ViewChild('instance', {static: true}) instance: NgbTypeahead;
    @Input() set userInstance(value: any) {
       this._userInstance = value;
    }
    get userInstance(): any {
        if(this._userInstance.user_profile_img_url){
          this.defaultProfileImg = this.media_url + this._userInstance.user_profile_img_url;
        }
        return this._userInstance;
    }

    focus$ = new Subject<string>();
    click$ = new Subject<string>();    

    constructor(){}

    ngOnInit() {

    }

    logOut() {
        this.logout.emit(true);
    }

    search = (text$: Observable<string>) => {
        const inputFocus$ = this.focus$.pipe(debounceTime(200), distinctUntilChanged());
        // const debouncedText$ = text$.pipe(debounceTime(100), distinctUntilChanged());
        const clicksWithClosedPopup$ = this.click$.pipe(
            filter(
                () => {
                    if(this.instance){
                      return !this.instance.isPopupOpen();
                    }
                    return
                }
            )
        );
        debugger;
        // return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
        return merge(inputFocus$, clicksWithClosedPopup$).pipe(
            map(term => {
                    debugger;
                if(term === '') {
                    return this.groups
                }else if(term === '_'){
                    return this.groups
                }else{
                    return this.groups.filter(v => v.name.toLowerCase().includes(term.toLocaleLowerCase())).splice(0, 10)
                }
            })
        )
    }

    formatter = (x: GroupInterface) => x.name;

    setSessionAclGid(){
        this.setAclGid.emit(this.selectedGroup)
    }

    checkA(){
        this.click$.next('A')
    }
}
