import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class OrcCheckService extends QueryHelper {
    public url = URLS.DRF_ORC_RECORD_CHECK_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getQuerySet(filters): Observable<any> {
        debugger;
        const params = this.buildFilter(filters);
        return this.apiService.get(this.url, params);
    }


}
