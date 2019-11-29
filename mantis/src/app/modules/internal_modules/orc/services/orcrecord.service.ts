import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { OrcRecordModel } from './../models/';
import { QueryHelper } from './base';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class OrcRecordService extends QueryHelper {
    public url = URLS.DRF_ORC_RECORD_URL;
    public changeStatusUrl = URLS.ORC_CHECK_DISPOSE_URL;
    public checkRecommendUrl = URLS.ORC_CHECK_RECOMMEND_URL;
    public addNotesUrl = URLS.ORC_CHECK_ADD_NOTES_URL;
    public addCheckImageUrl = URLS.ORC_CHECK_IMAGES_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getDistinctFields(id: number, filters: {field: string}): Observable<any> {
        const params = this.buildFilter(filters);
        let url = `${this.url}${id}/get_distinct_field/`;
        return this.apiService.get(url, params);
    }

    getIstChecks(id: number, group?: string): Observable<any> {
        debugger;
        let url = `${this.url}${id}/get_assigned_ist_jobs/`;
        if(group){
            let params = this.buildFilter({group: group});
            return this.apiService.get(url, params);
        }
        return this.apiService.get(url);
    }
    
    getSoaChecks(id: number): Observable<any> {
        let url = `${this.url}${id}/get_assigned_soa_jobs/`;
        return this.apiService.get(url);

    }      

    changeStatus(data: any): Observable<any> {
        let url = `${this.changeStatusUrl}`;
        return this.apiService.post(url, data);
    }       

    checkRecommend(data: any): Observable<any> {
        let url = `${this.checkRecommendUrl}`;
        return this.apiService.post(url, data);
    }     

    addCheckImages(data: any): Observable<any> {
        let url = `${this.addCheckImageUrl}`;
        return this.apiService.upload(url, data);
    }     

    addNotes(data: any): Observable<any> {
        let url = `${this.addNotesUrl}`;
        return this.apiService.post(url, data);
    }    

}
