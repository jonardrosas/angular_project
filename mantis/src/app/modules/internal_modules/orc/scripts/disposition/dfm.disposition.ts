import { MantisDispositionBase } from './base';
import { OrcCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';

export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
        this.dispoParams = dispoParams;

    }
}
