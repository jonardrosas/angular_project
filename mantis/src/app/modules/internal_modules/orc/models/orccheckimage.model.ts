import { BaseModel } from './base.model';
import { GroupInterface } from './auth_group.model'

export interface OrcCheckImageInterface {
    id: number;
    check: number;
    description: string;
    check_image: string;
}


export class OrcCheckImage extends BaseModel implements OrcCheckImageInterface {
    url = this.urls.DRF_ORC_RECORD_CHECKIMAGE_URL;
    id;
    check;
    description;
    check_image;

    constructor(){
        super()
        this.setUp()
    }

}