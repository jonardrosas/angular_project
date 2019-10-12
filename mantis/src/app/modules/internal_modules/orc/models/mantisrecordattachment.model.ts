import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';

export interface MantisAttachmentInterface {
    id: number;
    bug_id: number;
    attachment_type: string;
    date_atted: number;
    desription: string;
    file_type: string;
    filename: string;
    filesize: number;
    title: string;
    user_id: number;
}


export class MantisAttachment extends BaseModel implements MantisAttachmentInterface{
    __url = URLS.DRF_MANTIS_RECORD_ATTACHMENT_URL;
    id: number;
    bug_id: number;
    attachment_type: string;
    date_atted: number;
    desription: string;
    file_type: string;
    filename: string;
    filesize: number;
    title: string;
    user_id: number;    
}
