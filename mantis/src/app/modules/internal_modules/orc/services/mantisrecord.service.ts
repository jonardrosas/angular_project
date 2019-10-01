import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { ApiService } from './../../../../core/services';
import { QueryHelper } from './base';
import { MantisRecordModel } from './../models';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';


@Injectable()
export class MantisRecordService extends QueryHelper {
    public url = URLS.MANTIS_RECORD_URL;
    public errorSummaryUrl = URLS.CHECK_SUMMARY_URL;
    public jobNotesUrl = URLS.JOB_NOTES_URL;
    public jobAttachmentUrl = URLS.JOB_ATTACHMENT_URL;
    public jobHistoryUrl = URLS.JOB_HISTORY_URL;
    public mantisRecordSubject = new BehaviorSubject<MantisRecordModel>({} as MantisRecordModel);

    constructor(public apiService: ApiService) {
        super();
        this.setApiService(this.apiService);
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


}
