import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { OrcCheckStatusClass } from './../check-status';
import { OrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { OrcProgressBarTable } from './../progress-bar';

export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public deviceSummaryClass = OrcDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public checkStatusClass = OrcCheckStatusClass;
    public progressBarClass = OrcProgressBarTable;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}
