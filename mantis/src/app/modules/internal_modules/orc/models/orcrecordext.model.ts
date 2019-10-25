import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';

export interface OrcRecordExtInterface {
    orc_record: number;
    disposition_method: string;
    fab: string;
    awaiver_examined: boolean;
    assessment_status: string;
    fnd_rec: string;
    rtm_rec: string;
    fnd_date: string;
    rtm_date: string;
    ptrf_table: string;
    ptsr_table: string;
    assigned_group?;
    process_name?: string;
}


export class OrcRecordExt extends BaseModel  implements OrcRecordExtInterface {
    url = URLS.DRF_ORC_RECORD_EXT_URL;
    orc_record: number;
    disposition_method: string;
    fab: string;
    awaiver_examined: boolean;
    assessment_status: string;
    fnd_rec: string;
    rtm_rec: string;
    fnd_date: string;
    rtm_date: string;
    ptrf_table: string;
    ptsr_table: string;
    assigned_group?;
    process_name?: string;

    constructor(){
        super()
        this.setUp()
    }

}
