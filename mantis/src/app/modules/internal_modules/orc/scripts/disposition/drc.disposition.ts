import { MantisDispositionBase } from './base';
import { DrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { DrcCheckTable } from './../checks-columns';
import { DrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { DrcProgressBarTable } from './../progress-bar';
import { JobActionBase } from './../job-action';
import { DrcStoreManager } from './../store-manager';

export class DrcDispostion extends MantisDispositionBase {
    public checkTableClass = DrcCheckTable;
    public deviceSummaryClass = DrcDeviceSummary;
    public checkTableStoreAction;
    public checkTableStoreAssignedIstAction;
    public checkTableStoreAssignedSoaAction;
    public detailJobActionSectionClass = JobActionBase;
    public checkTableButtonsClass = DrcCheckDispositionButtonClass;
    public progressBarClass = DrcProgressBarTable;
    public storeStoreManagerClass =  DrcStoreManager;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
