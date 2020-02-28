import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonBase,
         OrcFtrfF7CheckDispositionButton
}   from './../check-disposition-buttons/';
import { LMCCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { LMCDeviceSummary, LMCRitDeviceSummary } from './../device-summary';
import { JobActionBase } from './../job-action';
import { OrcDispostion, OrcPtrfDispostion, OrcRitDispostion, OrcFtrfF1Dispostion, OrcFtrfF7Dispostion, OrcRitF7Dispostion, OrcFtrfDispostion } from './orc.disposition';


export class LMCDispostion extends OrcDispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}


export class LMCPtrfDispostion extends OrcPtrfDispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}


export class LMCFtrfDispostion extends OrcFtrfDispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}


export class LMCFtrfF1Dispostion extends OrcFtrfF1Dispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}


export class LMCFtrfF7Dispostion extends OrcFtrfF7Dispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}


export class LMCRitDispostion extends OrcRitDispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCRitDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}


export class LMCRitF7Dispostion extends OrcRitF7Dispostion {
    public checkTableClass: any = LMCCheckTable;
    public deviceSummaryClass = LMCRitDeviceSummary;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
    }
}
