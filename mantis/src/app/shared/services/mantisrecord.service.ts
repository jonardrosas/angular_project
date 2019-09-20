import { Injectable } from '@angular/core';
import { HttpParams } from "@angular/common/http";
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged, take, catchError } from 'rxjs/operators';
import { URLS } from  './../../configs';
import { ApiService } from './../../core/services';
import { MantisRecordModel } from './../models/';

@Injectable()
export class MantisRecordService {
    private mantisRecordUrl = URLS.MANTIS_RECORD_URL;

    constructor(private apiService: ApiService){
        console.log("MantisRecordService Created")
    }

    buildFilter(filters){
        let params = new HttpParams();
        for (let field in filters){
            let value = filters[field]
            params = params.append(field, value)
        }
        return params;
    }

    getQuerySet(filters): Observable<any>{
        const params = this.buildFilter(filters);
        return this.apiService.get(this.mantisRecordUrl, params)
    }

    getObject(id): Observable<any>{
        return this.apiService.get(this.mantisRecordUrl+id+'/');
    }

}
