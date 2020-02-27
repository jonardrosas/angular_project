import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';

export interface OrcCheckZeroInterface {
    record: number;
    name_list: string[];
}


export class OrcCheckZeroModel extends BaseModel implements OrcCheckZeroInterface {
    url = URLS.DRF_ORC_RECORD_CHECK_ZERO_URL;
    record: number;
    name_list: string[];

    constructor(){
        super()
        this.setUp()
    }    
}

