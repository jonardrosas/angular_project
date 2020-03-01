import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';
import { MantisRecordModel } from './../models';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';


@Injectable()
export class MantisRecordService extends QueryHelper {
    public url = URLS.DRF_MANTIS_RECORD_URL;
    public acl_session_url = URLS.ACL_SESSION_URL;
    public mantisRecordListUrl = URLS.DRF_MANTIS_RECORD_LIST_URL;
    public errorSummaryUrl = URLS.DRF_MANTIS_RECORD_TEXT_URL;
    public jobNotesUrl = URLS.DRF_MANTIS_RECORD_NOTE_URL;
    public jobAttachmentUrl = URLS.DRF_MANTIS_RECORD_ATTACHMENT_URL;
    public jobHistoryUrl = URLS.DRF_MANTIS_RECORD_HISTORY_URL;
    public mantisRecordSubject = new BehaviorSubject<MantisRecordModel>({} as MantisRecordModel);
    public groupUrl = URLS.DRF_AUTH_GROUP_PROFILE_URL;
    public jobChangeStatusUrl = URLS.DRF_ORC_JOB_DISPOSE_URL;
    public jobAddNotesUrl = URLS.ORC_ADD_JOB_NOTES;
    public jobAddAttachmentUrl = URLS.ORC_ADD_JOB_ATTACHMENT;
    public jobDeleteAttachmentUrl = URLS.ORC_DELETE_JOB_ATTACHMENT;
    public relaseForMaskWriteUrl = URLS.ORC_JOB_RELEASE_FOR_WRITE;

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
    }

    getObject(id): Observable<any> {
        return this.apiService.get(this.url + id + '/');
    }    

    getAclSession(id): Observable<any> {
        return this.apiService.get(this.acl_session_url);
    }        

    // override the default to use new url
    getQuerySet(filters): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.mantisRecordListUrl, params);
    }

    getErrorSummary(filters): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.errorSummaryUrl, params);
    }

    getJobNotes(filters: object): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.jobNotesUrl, params);
    }

    getAttachmentSvs(filters: object): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.jobAttachmentUrl, params);
    }

    getHistorytSvs(filters: object): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.jobHistoryUrl, params);
    }

    getGroups(filters): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.groupUrl, params);
    }    

    changeJobStatus(data: any): Observable<any> {
        let url = `${this.jobChangeStatusUrl}`;
        return this.apiService.post(url, data);
    }       

    addJobNotes(data: any): Observable<any> {
        let url = `${this.jobAddNotesUrl}`;
        return this.apiService.post(url, data);
    }        

    addJobAttachment(data: any): Observable<any> {
        let url = `${this.jobAddAttachmentUrl}`;
        return this.apiService.upload(url, data);
    }       

    deleteJobAttachment(data: any): Observable<any> {
        let url = `${this.jobDeleteAttachmentUrl}`;
        return this.apiService.post(url, data);
    }      

    orcReleaseForMaskWrite(data: any): Observable<any> {
        let url = `${this.relaseForMaskWriteUrl}`;
        return this.apiService.post(url, data);
    }        

}
