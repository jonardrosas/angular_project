import { Injectable } from '@angular/core';
import { Observable ,  BehaviorSubject ,  ReplaySubject } from 'rxjs';
import { map ,  distinctUntilChanged, take, catchError } from 'rxjs/operators';
import { URLS } from  './../../configs';
import { ApiService } from './../../core/services';
import { OrcRecordModel } from './../models/';

@Injectable()
export class OrcRecordService {
    private orcRecordUrl = URLS.ORC_RECORD_URL;
    public orcRecodSubject = new BehaviorSubject<OrcRecordModel>({} as OrcRecordModel);

    constructor(private apiService: ApiService){
        console.log("OrcRecordService Created")
    }

    getQuerySet(): Observable<any>{
        return this.apiService.get(this.orcRecordUrl)
    }

    getObject(id): Observable<any>{
        return this.apiService.get(this.orcRecordUrl+id+'/');
    }

}
