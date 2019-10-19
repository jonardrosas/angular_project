import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class OrcCheckService extends QueryHelper {
    public url = URLS.DRF_DRC_RECORD_CHECK_URL;
    public groupIstUrl = URLS.DRF_AUTH_GROUP_PROFILE_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getOrcIstGroup(filters): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.groupIstUrl, params);
    }    

}
