import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';


export interface OrcCheckInterface {
    id: number;
    name: string;
    type: string;
    sub_job: string;
    hier_error_count: number;
    flat_error_count: number;
    status: string;
    autopassed: number;
    validated: boolean;
    manual_review: boolean;
    reviews?: string[];
    rule_owner?: string;
    checkassessments?: string[];
    corrupt_rule?: string;
    waiver_recommendation?: string;
    unbind_data?: string;
    vio_bin_unbin_cnt?: number;
    record_id?: number;
    vio_cnt?: number;
    record?: number;
}


export class OrcCheckModel extends BaseModel implements OrcCheckInterface {
    url = URLS.DRF_ORC_RECORD_CHECK_URL;
    id: number;
    name: string;
    type: string;
    sub_job: string;
    hier_error_count: number;
    flat_error_count: number;
    status: string;
    autopassed: number;
    validated: boolean;
    manual_review: boolean;
    reviews?: string[];
    checkassessments?: string[];
    rule_owner?: string;
    corrupt_rule?: string;
    waiver_recommendation?: string;
    unbind_data?: string;
    vio_bin_unbin_cnt?: number;
    record_id?: number;
    record?: number;
    vio_cnt?: number;

    constructor(){
        super()
        this.setUp()
    }    
}

