import { MantisRecordModel } from './../../models';
import { OrcStoreManager, StoreBaseManager } from './../store-manager';
import { CheckNavigationBase } from './../check-navigation-tab';
import { JobActionBase } from './../job-action';
import { ProgressBarBase } from './../progress-bar';


export interface DispostionParameter {
    mantisRecord: MantisRecordModel;
    modalService?;
    status?;
    registeredCheckPopUps?;
    store?;
}

export interface MantisDispositionBaseInterface {
    jobReportTitle: string;
    dispoParams: DispostionParameter;

    checkTableClass;
    storeStoreManagerClass;
    deviceSummaryClass;
    checkTableButtonsClass;
    checkNavigationClass;

    checkTableIns;
    storeManagerIns;
}

export class MantisDispositionBase implements MantisDispositionBaseInterface {
    jobReportTitle: string;
    dispoParams: DispostionParameter;

    // required class
    checkTableClass: any = null;
    storeStoreManagerClass = OrcStoreManager;
    checkNavigationClass = CheckNavigationBase;
    deviceSummaryClass = null;
    checkTableButtonsClass = null;
    checkStatusClass;
    changeStatusOption = {};

    //  instance
    checkTableIns;
    storeManagerIns;
    checkStatusIns;

    progressBarClass = ProgressBarBase;
    detailJobActionSectionClass = JobActionBase;

    constructor(dispoParams: DispostionParameter) {
        this.dispoParams = dispoParams;
        const operation = this.dispoParams.mantisRecord.operation;        
        this.jobReportTitle = `${operation} Job Report`;
        if(dispoParams.store){
            this.setStoreManager(dispoParams.store)
        }
    }

    setStoreManager(store){
        if(this.dispoParams.store){
            this.storeManagerIns = new this.storeStoreManagerClass(store)
        }
    }

    getStoreManager(){
        return this.storeManagerIns;
    }

    getJobReportTitle(){
        return this.jobReportTitle;
    }

    createJobDispositionButtons(){
        if(this.detailJobActionSectionClass){
            return new this.detailJobActionSectionClass(this.dispoParams)
        }
        throw new Error('JobActionBase required')
    }

    getChecksTable(){
        if(this.checkTableClass){
            return new this.checkTableClass(this.dispoParams)
        }
        throw new Error('checkTableClass required')
    }

    getDeviceSummaryTable(){
        if(this.deviceSummaryClass){
            return new this.deviceSummaryClass(this.dispoParams)
        }
        throw new Error('deviceSummaryClass required')
    }

    getMantisStageProgressBar(){
        if(this.progressBarClass){
            return new this.progressBarClass()
        }
        throw new Error('progressBar is required')
    }

    createCheckStatusOptions(){
        if(this.checkStatusClass){
            return new this.checkStatusClass(this.dispoParams)
        }
    }

    createCheckActionButtons(){
        if(this.checkTableButtonsClass){
            return new this.checkTableButtonsClass(this.dispoParams);
        }
        throw new Error('checkTableButtonsClass required')
    }    

    createCheckMainNavigationBase(){
        if(this.checkNavigationClass){
            return new this.checkNavigationClass();
        }
        throw new Error('checkNavigationClass required')        

    }

}
