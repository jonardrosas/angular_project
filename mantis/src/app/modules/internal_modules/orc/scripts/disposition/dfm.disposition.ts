import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { DispostionParameter } from './base';
import { DfmProgressBarTable } from './../progress-bar';

export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public progressBarClass = DfmProgressBarTable;
    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
        this.dispoParams = dispoParams;

    }
}
