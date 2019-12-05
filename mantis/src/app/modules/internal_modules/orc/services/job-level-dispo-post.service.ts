import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JobLevelDispositionPostService {
    url: string = URLS.DRF_ORC_JOB_DISPOSE_URL;
    
    constructor (
        private http: HttpClient,
    ) { }
    
    public submitForm(obj) {
    }
}
