import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { JobActionBase } from './../job-action';


export class ValidatorDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    public detailJobActionSectionClass = JobActionBase;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
