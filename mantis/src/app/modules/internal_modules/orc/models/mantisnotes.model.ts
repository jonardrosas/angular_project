import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';


export interface MantisBugNoteText{
    id: number;
    note?: string;
    dwc_primedie_sumry?: boolean;
    drc_proj_sumry?: boolean;    
}


export interface MantisNotesInterface {
    id: number;
    view_state?: number;
    note_type?: number;
    note_attr?: string;
    time_tracking?;
    bug_status?: number;
    bug_resolution?: number;
    last_modified?: number;
    date_submitted?: number;
    bug: number;
    reporter?: string;
    bugnote_text: MantisBugNoteText;
}


export class MantisNotes extends BaseModel implements MantisNotesInterface{
    url = URLS.DRF_MANTIS_RECORD_NOTE_URL
    id: number;
    view_state?: number;
    note_type?: number;
    note_attr?: string;
    time_tracking?;
    bug_status?: number;
    bug_resolution?: number;
    last_modified?: number;
    date_submitted?: number;
    bug: number;
    reporter?: string;
    bugnote_text: MantisBugNoteText;

    constructor(){
        super()
        this.setUp()
    }      
}