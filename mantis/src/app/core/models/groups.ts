import { BaseModel } from './manager.model';
import { URLS } from './../../configs/index';


export interface GroupInterface {
    id: number;
    name: string;
}

export class Group extends BaseModel implements GroupInterface{
    id: number;
    name: string;
    url = URLS.DRF_AUTH_USER_CURRENT_GRP_URL;

    constructor(){
        super()
        this.setUp()
    }
}