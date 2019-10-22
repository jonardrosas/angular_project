import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class DrcRecordService extends QueryHelper {
    public url = URLS.DRF_DRC_RECORD_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getIstChecks(id: number): Observable<any> {
        debugger;
        let url = `${this.url}${id}/get_assigned_ist_jobs/`;
        return this.apiService.get(url);
    }
    
    getSoaChecks(id: number): Observable<any> {
        let url = `${this.url}${id}/get_assigned_soa_jobs/`;
        return this.apiService.get(url);

    }      

}
