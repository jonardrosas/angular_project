import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DrcCheckStatusClass } from './../check-status';
import { DrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { DrcProgressBarTable } from './../progress-bar';


export class DrcDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public deviceSummaryClass = DrcDeviceSummary;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    public checkStatusClass = DrcCheckStatusClass;
    public progressBarClass = DrcProgressBarTable;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}
