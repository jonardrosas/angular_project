import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';


export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
        this.dispoParams = dispoParams;

    }
}
