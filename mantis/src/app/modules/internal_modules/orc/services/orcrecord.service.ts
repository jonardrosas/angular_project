import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { OrcRecordModel } from './../models/';
import { QueryHelper } from './base';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class OrcRecordService extends QueryHelper {
    public url = URLS.DRF_ORC_RECORD_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getDistinctFields(id: number, filters: {field: string}): Observable<any> {
        const params = this.buildFilter(filters);
        let url = `${this.url}${id}/get_distinct_field/`;
        return this.apiService.get(url, params);
    }

}
