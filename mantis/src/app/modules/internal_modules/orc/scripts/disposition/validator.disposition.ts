import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';


export class ValidatorDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
