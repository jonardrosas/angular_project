import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DrcCheckStatusClass } from './../check-status';
import { OrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';


export class DrcDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public deviceSummaryClass = OrcDeviceSummary;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    public checkStatusClass = DrcCheckStatusClass;
    constructor(dispoParams: DispostionParameter) {
        super();
        this.dispoParams = dispoParams;
    }
}
