import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { DrcProgressBarTable } from './../progress-bar';


export class DrcDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public deviceSummaryClass = DrcDeviceSummary;
    public checkTableStoreAction;
    public checkTableStoreAssignedIstAction;
    public checkTableStoreAssignedSoaAction;

    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    public progressBarClass = DrcProgressBarTable;
    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
        this.checkTableStoreAction = this.store.getDrcChecksAction;
        this.checkTableStoreAssignedIstAction = this.store.getDrciSTChecksAction;
        this.checkTableStoreAssignedSoaAction = this.store.getDrcSoaChecksAction;
    }
}
