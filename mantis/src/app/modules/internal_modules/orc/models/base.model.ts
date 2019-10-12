import { ApiService } from './../../../../core/services';


export class QueryManager{
    public apiService = new ApiService()
}

export class BaseModel {
    protected __url?: string;

    getAbsoluteUrl() {
        return this.__url;
    }

    setAbsoluteUrl(url) {
        this.__url = url;
    }
}