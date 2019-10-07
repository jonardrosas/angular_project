import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { OrcCheckStatusClass } from './../check-status';
import { DispostionParameter } from './base';


export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public checkStatusClass = OrcCheckStatusClass;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}
