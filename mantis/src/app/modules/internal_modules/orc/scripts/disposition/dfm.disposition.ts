import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { DfmProgressBarTable } from './../progress-bar';
import { JobActionBase } from './../job-action';

export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public progressBarClass = DfmProgressBarTable;
    public detailJobActionSectionClass = JobActionBase;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
        this.dispoParams = dispoParams;

    }
}
