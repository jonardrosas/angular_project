import { OrcModuleOperation } from './common/operation.class';
import {DispostionParameter, } from './disposition';
import { MainDispoHandler } from './disposition-handler'


interface MantisDispositionManagerInterface {
    dispositionInstance;
    checkTableInstance;
    checkDispoButtonsInstance;
    deviceSummary;
}


export class MantisDispositionManager extends OrcModuleOperation implements MantisDispositionManagerInterface {
    public dispositionInstance;
    public checkTableInstance;
    public checkDispoButtonsInstance;
    public deviceSummary;
    public progressBarInstance;
    public detailJobActionSectionInstance;
    public loadCheck;
    public checkComponentInstance;
    public detailComponentInstance;
    public checkMainTabs;
    public checkNavigation;
    public dispoParams: DispostionParameter;
    public storeManagerIns;
    public jobReportTitle;
    public checkStatusInstance;
    public changeStatusOption;
    public recommendationOptions;
    public checkDispositionButtons;
    public checkApi;
    public jobButtons;
    public checkZeroColumn;
    public checkColumnDefs;
    public checkAssessmentDefs;

    public checkReviewHistoryColumn;
    public checkAssessmentHistoryColumn;
    public checkDetailInfo;


    constructor(dispositionInstance: any) {
        super();
        this.dispositionInstance = dispositionInstance;
        this.checkReviewHistoryColumn = this.dispositionInstance.checkReviewHistoryColumn;
        this.checkAssessmentHistoryColumn = this.dispositionInstance.checkAssessmentHistoryColumn;
        this.storeManagerIns = this.dispositionInstance.getStoreManager()
        this.jobReportTitle = this.dispositionInstance.getJobReportTitle();
        this.deviceSummary = this.dispositionInstance.getDeviceSummaryTable();
        this.progressBarInstance = this.dispositionInstance.getMantisStageProgressBar();
        this.createCheckStatusOptions()
        this.createCheckDispoButtons()
        this.createCheckNavigationTab()
        this.createJobDispositionButton()
        this.buildCheckTable()
    }

    public filterJobProgressBar(stages){
        this.progressBarInstance = this.dispositionInstance.getMantisStageProgressBar();
        const jobProgressButtons = this.progressBarInstance.filterProgressBarStages(stages)
        return jobProgressButtons;
    }

    private createJobDispositionButton(){
        const detailJobActionSectionInstance = this.dispositionInstance.createJobDispositionButtons();
        this.jobButtons = detailJobActionSectionInstance.allButtons; 
    }

    private createCheckStatusOptions(){
        this.checkStatusInstance = this.dispositionInstance.createCheckStatusOptions();
        if(this.checkStatusInstance){
            this.changeStatusOption =  this.checkStatusInstance.changeStatusOptions;
            this.recommendationOptions =  this.checkStatusInstance.recommendationOptions;
        }        
    }

    private createCheckDispoButtons() {
        this.checkDispoButtonsInstance = this.dispositionInstance.createCheckActionButtons();
        if(this.checkDispoButtonsInstance){
            this.checkDispositionButtons = this.checkDispoButtonsInstance.buttonSet;
            this.checkApi = this.checkDispoButtonsInstance.checkApiClass;
        }
    }

    private createCheckNavigationTab(){
        this.checkNavigation = this.dispositionInstance.createCheckMainNavigationBase();
        if(this.checkNavigation){
            this.checkMainTabs = this.checkNavigation.mainTabs;
        }
    } 

    public buildCheckTable(){
        this.checkTableInstance = this.dispositionInstance.getChecksTable()
        if(this.checkTableInstance){
            this.checkZeroColumn = this.checkTableInstance.checkZeroColDef;
            this.checkColumnDefs = this.checkTableInstance.columnDefs;
            this.checkAssessmentDefs = this.checkTableInstance.assessmentDefs;
            this.checkDetailInfo = this.checkTableInstance.checkDetailInfo;
        }
    }

    getDeviceSummaryTables() {
        return this.deviceSummary;
    }
    
}


export class MantisDispositionManagerConfig{
    managerIns: MantisDispositionManager;
    dispositionInstance;
    jobReportTitle: string;

    constructor(public dispoParams: DispostionParameter) {
        this.dispositionInstance = new MainDispoHandler(dispoParams).disposition;
        this.managerIns = new MantisDispositionManager(this.dispositionInstance)
        this.managerIns.dispoParams = this.dispoParams;
    }    

}
