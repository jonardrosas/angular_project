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
    timestamp: string;
    workdir: string;
    orc_ext: OrcRecordExtInterface;
}


export class OrcRecordModel {
    assignee: string;
    device: string;
    disposition_method: string;
    fab: string;
    gto_db: string;
    id: number;
    job_id: string;
    layer: string;
    mantis_id: number;
    mantis_stage;
    maskset: string;
    mrs_status: string;
    nm_exists_flag: boolean;
    nm_rules;
    operation: string;
    orc_check_status_map;
    orc_status_map;
    pcf_mask_lay: string;
    pdb_status: string;
    ptrf: string;
    review_path: string;
    run_history: number;
    sbldevice_piye: string;
    status: string;
    techtype: string;
    timestamp: number;
    checks;
}