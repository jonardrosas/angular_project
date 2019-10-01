import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { OrcRecordModel } from './../models/';
import { QueryHelper } from './base';

@Injectable()
export class OrcRecordService extends QueryHelper {
    public url = URLS.ORC_RECORD_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

}
