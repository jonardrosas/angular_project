import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonBase,
         OrcPtrfF1CheckDispositionButton,
         OrcFtrfF7CheckDispositionButton
}   from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { OrcCheckStatus, OrcFtrfF7CheckStatus, OrcFtrfF1CheckStatus } from './../check-status';
import { OrcDeviceSummary, FTRFOrcDeviceSummary, RitOrcDeviceSummary, PtrfOrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { STATUS_GROUP } from './../../scripts/enums';
import { JobActionBase, OrcJobAction } from './../job-action';
import { OrcPtrfF1ProgressBar } from './../progress-bar';

import { 
    OrcCheckNavigation, 
    OrcFtrfF7CheckNavigation, 
    OrcFtrfF1CheckNavigation, 
    OrcPtrfF1CheckNavigation 
} from './../check-navigation-tab';


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


/** PTRF * */
export class OrcPtrfDispostion extends OrcDispostion {
    deviceSummaryClass = PtrfOrcDeviceSummary;
}

export class OrcPtrfF7Dispostion extends OrcPtrfDispostion {}

export class OrcPtrfF1Dispostion extends OrcPtrfDispostion {
    progressBarClass = OrcPtrfF1ProgressBar;
    checkNavigationClass = OrcPtrfF1CheckNavigation;
    checkTableButtonsClass = OrcPtrfF1CheckDispositionButton;
    detailJobActionSectionClass = OrcJobAction;
}

export class OrcPtrfF8Dispostion extends OrcPtrfDispostion {}


/** RIT **/
export class OrcRitDispostion extends OrcDispostion {
    public deviceSummaryClass = RitOrcDeviceSummary;;

}
export class OrcRitF7Dispostion extends OrcRitDispostion {
    public checkStatusClass = OrcFtrfF7CheckStatus;
    public checkTableButtonsClass = OrcFtrfF7CheckDispositionButton;
    public checkNavigationClass = OrcFtrfF7CheckNavigation;
}

/** FTRF ***/
export class OrcFtrfDispostion extends OrcDispostion {
    public deviceSummaryClass = FTRFOrcDeviceSummary;
}


export class OrcFtrfF7Dispostion extends OrcFtrfDispostion {
    public checkStatusClass = OrcFtrfF7CheckStatus;
    public checkTableButtonsClass = OrcFtrfF7CheckDispositionButton;
    public checkNavigationClass = OrcFtrfF7CheckNavigation;
}


export class OrcFtrfF1Dispostion extends OrcFtrfDispostion {
    public checkStatusClass = OrcFtrfF7CheckStatus;
    public checkTableButtonsClass = OrcFtrfF7CheckDispositionButton;
    public checkNavigationClass = OrcFtrfF7CheckNavigation;    
}


export class OrcFtrfF9Dispostion extends OrcFtrfDispostion {
}


