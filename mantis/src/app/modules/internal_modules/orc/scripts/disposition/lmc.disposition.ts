import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { LMCDeviceSummary } from './../device-summary';
import { OrcProgressBarTable } from './../progress-bar';
import { JobActionBase } from './../job-action';
import { checkChangeStatusList } from './../../scripts/common/status';
import { OrcDispostion } from './orc.disposition';

export class LMCDispostion extends OrcDispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public progressBarClass = OrcProgressBarTable;
    public detailJobActionSectionClass = JobActionBase;
    readonly checkStatus = checkChangeStatusList;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
