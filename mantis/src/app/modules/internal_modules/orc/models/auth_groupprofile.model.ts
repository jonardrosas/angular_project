import { BaseModel } from './base.model';
export interface GroupProfileInterface {
    id?: number;
    name?: string;
    fab?: string;
    application?: string;
    operation?: string;
    technology?: string;
    techtype?: string;
    layer?: string;
    customer?: string;
    status?: string;
    maskset?: string;
    default_filter?;
    can_receive_mail?: boolean;
    hidden?: boolean;
}


export class GroupProfile extends BaseModel implements GroupProfileInterface{
    id: number;
    name: string;

    constructor(){
        super()
    }
}