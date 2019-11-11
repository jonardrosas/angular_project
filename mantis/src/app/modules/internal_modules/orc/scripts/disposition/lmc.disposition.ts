import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { LMCDeviceSummary } from './../device-summary';
import { OrcProgressBarTable } from './../progress-bar';
import { JobActionBase } from './../job-action';

export class LMCDispostion extends MantisDispositionBase {
    public checkTableClass = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public progressBarClass = OrcProgressBarTable;
    public detailJobActionSectionClass = JobActionBase;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
