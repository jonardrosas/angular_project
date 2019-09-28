import { HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged, take, catchError } from 'rxjs/operators';


export class QueryHelper {
    public url;
    public apiService;

    constructor() {
        console.log('Query Helper Builder');
    }

    setApiService(apiService) {
        this.apiService = apiService;
    }

    buildFilter(filters) {
        let params = new HttpParams();
        for (const field in filters) {
            if (filters[field]) {
                const value = filters[field];
                params = params.append(field, value);
            }
        }
        return params;
    }

    getQuerySet(filters): Observable<any> {
        const params = this.buildFilter(filters);
        return this.apiService.get(this.url, params);
    }

    getObject(id): Observable<any> {
        return this.apiService.get(this.url + id + '/');
    }

}
