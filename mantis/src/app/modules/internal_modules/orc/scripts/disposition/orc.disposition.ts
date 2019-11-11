import { MantisDispositionBase } from './base';
import { OrcCheckDispositionButtonClass } from './../check-disposition-buttons/';
import { OrcCheckTable } from './../checks-columns';
import { OrcDeviceSummary } from './../device-summary';
import { DispostionParameter } from './base';
import { OrcProgressBarTable } from './../progress-bar';
import { checkChangeStatusList } from './../../scripts/common/status';
import { STATUS_GROUP } from './../../scripts/enums';
import { JobActionBase } from './../job-action';


export class OrcDispostion extends MantisDispositionBase {
    public checkTableClass = OrcCheckTable;
    public changeStatusOptions;
    public recommendationOptions;
    public deviceSummaryClass = OrcDeviceSummary;
    public checkTableButtonsClass = OrcCheckDispositionButtonClass;
    public progressBarClass = OrcProgressBarTable;
    readonly checkStatus = checkChangeStatusList;
    public detailJobActionSectionClass = JobActionBase;

    constructor(dispoParams: DispostionParameter) {
        super(dispoParams);
        this._setChangeStatusOptions();
        this._setRecommendationOption();
    }

    private _setChangeStatusOptions() {
        this.changeStatusOptions = {};
        for ( const statusIndex in this.checkStatus) {
            if (this.checkStatus[statusIndex]) {
                const row = this.checkStatus[statusIndex];
                const group = this.checkStatus[statusIndex].group;
                if (group in this.changeStatusOptions) {
                    this.changeStatusOptions[group].push(row);
                } else {
                    this.changeStatusOptions[group] = [ row ];
                }
            }
        }
    }

    // show pass and fail only
    private _setRecommendationOption() {
        this.recommendationOptions = {};
        for ( const statusIndex in this.checkStatus) {
            if (this.checkStatus[statusIndex]) {
                const row = this.checkStatus[statusIndex];
                const group = this.checkStatus[statusIndex].group;
                if([STATUS_GROUP.PASS, STATUS_GROUP.FAIL].indexOf(group) != -1){
                    if (group in this.recommendationOptions) {
                        this.recommendationOptions[group].push(row);
                    } else {
                        this.recommendationOptions[group] = [ row ];
                    }
                }
            }
        }
    }    

}
