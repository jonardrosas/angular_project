import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonBase,
         OrcPtrfF1CheckDispositionButtonBase,
         OrcFtrfF7CheckDispositionButton
}   from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { OrcCheckStatus, OrcFtrfF7CheckStatus, OrcFtrfF1CheckStatus } from './../check-status';
import { OrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { STATUS_GROUP } from './../../scripts/enums';
import { JobActionBase } from './../job-action';
import { OrcCheckNavigation, OrcFtrfF7CheckNavigation, OrcFtrfF1CheckNavigation } from './../check-navigation-tab';


export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public recommendationOptions;
    public deviceSummaryClass = OrcDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonBase;
    public checkStatusClass = OrcCheckStatus;
    public checkNavigationClass = OrcCheckNavigation;
    public checkStatusIns;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }

}


export class OrcFtrfDispostion extends OrcDispostion {

}


export class OrcFtrfF7Dispostion extends OrcFtrfDispostion {
    public checkStatusClass = OrcFtrfF7CheckStatus;
    public checkTableButtonsClass = OrcFtrfF7CheckDispositionButton;
    public checkNavigationClass = OrcFtrfF7CheckNavigation;
}


export class OrcFtrfF1Dispostion extends OrcFtrfDispostion {
    public checkStatusClass = OrcFtrfF1CheckStatus;
    public checkTableButtonsClass = OrcPtrfF1CheckDispositionButtonBase;
    public checkNavigationClass = OrcFtrfF1CheckNavigation;
}

