import { Injectable } from '@angular/core';
import { URLS } from './../../../../configs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JobLevelAssignPostService {
    url: string = URLS.DRF_JOB_ASSIGNMENT_URL;
    
    constructor (
        private http: HttpClient,
    ) { }
    
    public submitForm(obj) {
        return this.http.post(this.url, obj, {
            headers: new HttpHeaders ({
                'Content-Type': 'application/json',
            })
        }).map(data =>
            data
        );
    }
}