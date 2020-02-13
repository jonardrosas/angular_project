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
    public updateCheckImageDescUrl = URLS.ORC_CHECK_UPDATE_IMG_DESC_URL;
    public deleteCheckImage = URLS.ORC_CHECK_DEL_IMG_URL;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getDistinctFields(id: number, filters: {field: string}): Observable<any> {
        const params = this.buildFilter(filters);
        let url = `${this.url}${id}/get_distinct_field/`;
        return this.apiService.get(url, params);
    }

    getAssignedChecks(id: number, group?: string, status?: string): Observable<any> {
        let url = `${this.url}${id}/get_assigned_check_jobs/`;
        if(group){
            let params = this.buildFilter({group: group, status: status});
            return this.apiService.get(url, params);
        }
        return this.apiService.get(url);
    }    

    getChecks(id: number, group?: string, status?: string, limit?: string): Observable<any> {
        let url = `${this.url}${id}/get_check/`;
        if(group){
            let params = this.buildFilter({group: group, status: status, limit: limit});
            return this.apiService.get(url, params);
        }
        return this.apiService.get(url);
    }      

    getCheckStatCount(id: number): Observable<any> {
        let url = `${this.url}${id}/get_count/`;
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

    updateImageDescription(data: any): Observable<any> {
        let url = `${this.updateCheckImageDescUrl}`;
        return this.apiService.post(url, data);
    }

    deleteImage(data: any): Observable<any> {
        let url = `${this.deleteCheckImage}`;
        return this.apiService.post(url, data);
    }    

    addNotes(data: any): Observable<any> {
        let url = `${this.addNotesUrl}`;
        return this.apiService.post(url, data);
    }    

}
