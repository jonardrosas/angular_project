import { Injectable } from '@angular/core';
import { URLS } from  './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';

@Injectable()
export class OrcCheckService extends QueryHelper {
    public url = URLS.ORC_CHECK_URL;

    constructor(public apiService: ApiService){
        super()
        this.setApiService(this.apiService)
    }

}
