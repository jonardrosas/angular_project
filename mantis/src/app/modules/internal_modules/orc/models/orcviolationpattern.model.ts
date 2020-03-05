import { BaseModel } from './base.model';


export interface OrcPatternInterface {
    id: number;
    capture_id: number;
    comment: string;
    if_target: boolean;
    image: string;
    name: string;
    oas_file: string;
    pdb_id: number;
    type: string;

}


export class OrcPatternModel implements OrcPatternInterface {
    id: number;
    capture_id: number;
    comment: string;
    if_target: boolean;
    image: string;
    name: string;
    oas_file: string;
    pdb_id: number;
    type: string;

}



