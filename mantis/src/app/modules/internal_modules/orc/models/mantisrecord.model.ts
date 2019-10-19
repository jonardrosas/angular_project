import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';
import { OrcRecordModel } from './orcrecord.model';
import { MantisRecordText } from './mantisrecordtext.model';

export interface MantisRecordInterface {
    bug_text_id: number;
    date_generated: number;
    device: string;
    gto_db: string;
    id: number;
    job_id: number;
    layer: string;
    maskset: string;
    operation: string;
    orc_record_id: number;
    ptrf: string;
    resolution: string;
    reviewer: string;
    run_history?: number;
    status?: string;
    techtype: string;
    status_code?: number;
    resolution_code?: number;
    orc_record?: OrcRecordModel;
    pdbstatus?: string;
    customer?: string;
    layer_rev?: string;
    process_id?: string;
    workdir?: string;
    outputdir?: string;
    logfile?: string;
    runfile?: string;
    date_submitted?: number;
    last_updated?: number;
    gto_last_updater?: string;
    gto_update_time?: string;
    gto_status_code?: number;
    gto_review_status?;
    profile_id?: number;
    generic_info?: string;
    archived?: number;
    project?: number;
    reporter?: number;
    handler?: number;
    bug_text?: MantisRecordText;
    category?: number;
    drcentry?;
}


export class MantisRecordModel extends BaseModel implements MantisRecordInterface {
    __url = URLS.DRF_MANTIS_RECORD_URL;
    bug_text_id: number;
    date_generated: number;
    device: string;
    gto_db: string;
    id: number;
    job_id: number;
    layer: string;
    maskset: string;
    operation: string;
    orc_record_id: number;
    ptrf: string;
    resolution: string;
    reviewer: string;
    run_history: number;
    status: string;
    techtype: string;
    status_code?: number;
    resolution_code: number;
    orc_record?: OrcRecordModel;
    pdbstatus?: string;
    customer?: string;
    layer_rev?: string;
    process_id?: string;
    workdir?: string;
    outputdir?: string;
    logfile?: string;
    runfile?: string;
    date_submitted?: number;
    last_updated?: number;
    gto_last_updater?: string;
    gto_update_time?: string;
    gto_status_code?: number;
    gto_review_status?;
    profile_id?: number;
    generic_info?: string;
    archived?: number;
    project?: number;
    reporter?: number;
    handler?: number;
    bug_text?: MantisRecordText;
    category?: number;
    drcentry?;    

}

