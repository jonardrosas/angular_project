export class OrcCheckModel {
    id: number;
    name: string;
    type: string;
    sub_job: string;
    hier_error_count: number;
    flat_error_count: number;
    status: string;
    autopassed: number;
    validated: boolean;
    vio_cnt: number;
    manual_review: boolean;
    reviews: string[];
    rule_owner: string;
    corrupt_rule: string;
    waiver_recommendation: string;
    unbind_data: string;
    vio_bin_unbin_cnt: number;
    record_id: number;
}

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
    vio_cnt: number;
    manual_review: boolean;
    reviews: string[];
    rule_owner: string;
    corrupt_rule: string;
    waiver_recommendation: string;
    unbind_data: string;
    vio_bin_unbin_cnt: number;
    record_id: number;
}
