import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { OrcCheckStatusClass } from './../check-status';
import { DispostionParameter } from './base';
import { LMCDeviceSummary } from './../device-summary';

export class LMCDispostion extends MantisDispositionBase {
    public checkTableClass = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public checkStatusClass = OrcCheckStatusClass;
    public progressBarClass = OrcProgressBarTable;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}
