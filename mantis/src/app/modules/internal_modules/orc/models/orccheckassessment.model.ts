import { BaseModel } from './base.model';
import { GroupInterface } from './auth_group.model'

export interface OrcCheckAssessmentInterface {
    id: number;
    assigned_group: GroupInterface;
    check__record: number;
    old_status: string;
    new_status: string;
    assessment: string;
    comments: string;
    date: string;
    reassign_status: number;
    check: number;
    user: number;
}


export class OrcCheckAsessment extends BaseModel implements OrcCheckAssessmentInterface {
    url = this.urls.DRF_DRC_RECORD_CHECK_ASSESSMENT_URL;
    id;
    assigned_group: GroupInterface;
    check__record;
    old_status;
    new_status;
    assessment;
    comments;
    date;
    reassign_status;
    check;
    user;    

    constructor(){
        super()
        this.setUp()
    }

}