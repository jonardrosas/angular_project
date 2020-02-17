import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';

export interface MantisStageInterface {
    id: number;
    name: string;
    color: string;
}


export class MantisStage extends BaseModel implements MantisStageInterface {
    url = URLS.DRF_MANTIS_STAGE_URL;
    id: number;
    name: string;
    color: string;

    constructor(){
        super()
        this.setUp()
    }

}
