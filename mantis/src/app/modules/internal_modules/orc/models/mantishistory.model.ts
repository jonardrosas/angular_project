import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';


export interface MantisRecordHistoryInterface {
    bug_id: number;
    date_modified: number;
    date_modified_string: string;
    field_name: string;
    id: number;
    new_value: string;
    old_value: string;
    type_type: number;
    username: number;
}


export class MantisRecordHistory extends BaseModel implements MantisRecordHistoryInterface {
    url = URLS.DRF_MANTIS_RECORD_ATTACHMENT_URL;
    bug_id: number;
    date_modified: number;
    date_modified_string: string;
    field_name: string;
    id: number;
    new_value: string;
    old_value: string;
    type_type: number;
    username: number;

    constructor(){
        super()
        this.setUp()
    }      
}
