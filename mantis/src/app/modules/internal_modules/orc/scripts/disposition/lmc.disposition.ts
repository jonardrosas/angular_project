import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { LMCDeviceSummary } from './../device-summary';


export class LMCDispostion extends MantisDispositionBase {
    public checkTableClass = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
