import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { OrcCheckStatusClass } from './../check-status';
import { DispostionParameter } from './base';


export class LMCDispostion extends MantisDispositionBase {
    public checkTableClass = LMCCheckTable;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public checkStatusClass = OrcCheckStatusClass;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}