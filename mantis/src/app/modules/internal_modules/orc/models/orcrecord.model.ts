import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';
import { OrcRecordExtInterface } from './orcrecordext.model';


export interface OrcRecordInterface {
    archived: boolean;
    autopassed?: string;
    customer: string;
    date: string;
    device: string;
    flow_status: string;
    generic_info: string;
    gto_db?: string;
    gto_last_updater: string;
    gto_review_status: string;
    gto_status_code: number;
    gto_update_time: number;
    id: number;
    is_main_record: boolean;
    job_end_time: boolean;
    job_id: number;
    job_start_time: string;
    layer: string;
    layer_rev: string;
    logfile: string;
    mantis_id: number;
    mantis_resolution: string;
    maskset: string;
    neutralfile: string;
    operation: string;
    orcn_id: string;
    pdb_status: string;
    process_id: number;
    ptrf: string;
    ptrf2: string;
    push_disposed: string;
    reanalysis: boolean;
    run_history: number;
    runfile: number;
    siteloc: string;
    status: string;
    task_id: string;
    techfile: string;
    techtype: string;
    timestamp: number;
    workdir: string;
    orc_ext?: OrcRecordExtInterface;
}


export class OrcRecordModel extends BaseModel implements OrcRecordInterface {
    url = URLS.DRF_ORC_RECORD_URL;
    archived: boolean;
    autopassed?: string;
    customer: string;
    date: string;
    device: string;
    flow_status: string;
    generic_info: string;
    gto_db?: string;
    gto_last_updater: string;
    gto_review_status: string;
    gto_status_code: number;
    gto_update_time: number;
    id: number;
    is_main_record: boolean;
    job_end_time: boolean;
    job_id: number;
    job_start_time: string;
    layer: string;
    layer_rev: string;
    logfile: string;
    mantis_id: number;
    mantis_resolution: string;
    maskset: string;
    neutralfile: string;
    operation: any;
    orcn_id: string;
    pdb_status: string;
    process_id: number;
    ptrf: string;
    ptrf2: string;
    push_disposed: string;
    reanalysis: boolean;
    run_history: number;
    runfile: number;
    siteloc: string;
    status: string;
    task_id: string;
    techfile: string;
    techtype: string;
    timestamp: number;
    workdir: string;
    orc_ext?: OrcRecordExtInterface;    
    checks?;

    constructor(){
        super()
        this.setUp()
    }

}