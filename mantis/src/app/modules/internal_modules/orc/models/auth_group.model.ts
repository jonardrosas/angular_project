import { BaseModel } from './base.model';

export interface GroupInterface {
    id: number;
    name: string;
}

export class Group extends BaseModel implements GroupInterface{
    id: number;
    name: string;

    constructor(){
        super()
    }
}