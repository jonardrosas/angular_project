import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DrcCheckStatusClass } from './../check-status';
import { DispostionParameter } from './base';


export class ValidatorDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    public checkStatusClass = DrcCheckStatusClass;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}
