import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';


export interface MantisRecordTextInterface{
    id: number;
    description?: string;
    histogramfile?: string;
    cal_ver?: string;
    master?: string;
    job_start_time?: string;
    job_end_time?: string;
    topcell?: string;
    intype?: string;
    inpath?: string;
    outtype?: string;
    outpath?: string;
    results_magnification?: string;
    results_db_precision?: string;
    rulecheck_cnt?: string;
    results_cnt_hier?: string;
    results_cnt_flat?: string;
    cpu_time_master?: string;
    cpu_time_slave?: string;
    real_time?: string;
    cpu_cnt?: string;
    chip_bnd_x1?: string;
    chip_bnd_y1?: string;
    chip_bnd_x2?: string;
    chip_bnd_y2?: string;
}


export class MantisRecordText extends BaseModel implements MantisRecordTextInterface {
    __url = URLS.DRF_MANTIS_RECORD_TEXT_URL;
    id: number;
    description?: string;
    histogramfile?: string;
    cal_ver?: string;
    master?: string;
    job_start_time?: string;
    job_end_time?: string;
    topcell?: string;
    intype?: string;
    inpath?: string;
    outtype?: string;
    outpath?: string;
    results_magnification?: string;
    results_db_precision?: string;
    rulecheck_cnt?: string;
    results_cnt_hier?: string;
    results_cnt_flat?: string;
    cpu_time_master?: string;
    cpu_time_slave?: string;
    real_time?: string;
    cpu_cnt?: string;
    chip_bnd_x1?: string;
    chip_bnd_y1?: string;
    chip_bnd_x2?: string;
    chip_bnd_y2?: string;    

}
