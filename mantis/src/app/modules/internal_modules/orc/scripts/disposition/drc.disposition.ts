import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';


export class DrcDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public deviceSummaryClass = DrcDeviceSummary;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
