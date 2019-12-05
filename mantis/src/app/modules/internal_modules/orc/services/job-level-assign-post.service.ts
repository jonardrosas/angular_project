import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class JobLevelAssignPostService {
    url: string = URLS.DRF_JOB_ASSIGNMENT_URL;
    
    constructor (
        private http: HttpClient,
    ) { }
    
    public submitForm(obj) {
    }
}
