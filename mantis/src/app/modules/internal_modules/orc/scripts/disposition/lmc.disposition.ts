import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonBase,
         OrcFtrfF7CheckDispositionButton
}   from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { LMCDeviceSummary } from './../device-summary';
import { JobActionBase } from './../job-action';
import { OrcDispostion } from './orc.disposition';

export class LMCDispostion extends OrcDispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonBase;
    public detailJobActionSectionClass = JobActionBase;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
