import { Injectable } from '@angular/core';
import { URLS } from  './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';


@Injectable()
export class MantisRecordService extends QueryHelper {
    url = URLS.MANTIS_RECORD_URL;

    constructor(public apiService: ApiService){
        super()
        this.setApiService(this.apiService)
    }

}
