import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class DrcCheckService extends QueryHelper {
    public url = URLS.DRF_DRC_RECORD_CHECK_URL;
    public groupIstUrl = URLS.DRF_AUTH_GROUP_PROFILE_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

}
