import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';
import { OrcPatternModel } from './orcviolationpattern.model';
 

export interface OrcViolastionInterface {
    id: number;
    analysis_name: string;
    avg_cd: number;
    check_id: number;
    mantis_d: number;
    count: number;
    device: string;
    maskset: string;
    image: string;
    layer: string;
    layer_rev: string;
    max_cd: number;
    min_cd: number;
    name: string;
    pat_img: string;
    pdb_id: number;
    pdb_img: string;
    pdb_pattern_img: string;
    pdb_pid: string;
    pdb_type: string;
    ptrf: string;
    status: string;
    timestamp: string;
    x: string;
    y: string;
    xy: string[]

}


export class OrcViolationModel extends BaseModel implements OrcViolastionInterface {
    url = URLS.ORC_VIOLATION_URL;
    id: number;
    analysis_name: string;
    avg_cd: number;
    check_id: number;
    mantis_d: number;
    count: number;
    device: string;
    maskset: string;
    image: string;
    layer: string;
    layer_rev: string;
    max_cd: number;
    min_cd: number;
    name: string;
    pat_img: string;
    pdb_id: number;
    pdb_img: string;
    pdb_pattern_img: string;
    pdb_pid: string;
    pdb_type: string;
    ptrf: string;
    status: string;
    timestamp: string;
    x: string;
    y: string;
    xy: string[]    
    pattern: OrcPatternModel;

    constructor(){
        super()
        this.setUp()
    }    
}

export class OrcViolationCardModel extends OrcViolationModel {
    isSelected: boolean;
}

