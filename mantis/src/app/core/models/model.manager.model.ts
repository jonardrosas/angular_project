import { HttpParams } from '@angular/common/http';
import { ApiService } from './../../core/services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { URLS } from './../../configs';


export class QueryManager{
    public apiService = ApiService.instance;
    private url;

    constructor(url){
        this.url = url;
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

    filter(filters): Observable<any> {
        const params = this.buildFilter(filters);
        console.info("FILTER -------------", this.url)
        return this.apiService.get(this.url, params).pipe(
            map(data => data.results)
        )
    }

    get(id): Observable<any> {
        return this.apiService.get(this.url + id + '/');
    }
}


// https://github.com/microsoft/TypeScript/issues/1617
export class BaseModel {
    public urls = URLS;
    public url: string;
    public objects: QueryManager;

    constructor(){
        this.setUp()
    }

    public setUp(){
        if(this.url){
            this.objects = new QueryManager(this.url)
        }
    }
}
