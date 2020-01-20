import { BaseModel } from './base.model';
import { URLS } from './../../../../configs';

export interface MantisResolutionInterface {
    id: number;
    name: string;
    symbol: string;
    apps: string;
    description: string;
    stage: number;
}


export class MantisResolution extends BaseModel  implements MantisResolutionInterface {
    url = URLS.DRF_MANTIS_RESOLUTION_URL;
    id: number;
    name: string;
    symbol: string;
    apps: string;
    description: string;
    stage: number;    

    constructor(){
        super()
        this.setUp()
    }

}
