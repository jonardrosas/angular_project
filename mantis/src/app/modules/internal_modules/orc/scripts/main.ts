import { OrcModuleOperation } from './common/operation.class';
import { 
    DispostionParameter, DrcDispostion, LMCDispostion,
    ValidatorDispostion, OrcDispostion, OrcFtrfF7Dispostion
} from './disposition';


interface MantisDispositionManagerInterface {
    dispositionInstance;
    checkTableInstance;
    checkDispoButtonsInstance;
    deviceSummaryInstance;
    progressBarInstance?;
    detailJobActionSectionInstance?;
}


export class MantisDispositionManager extends OrcModuleOperation implements MantisDispositionManagerInterface {
    public dispositionInstance;
    public checkTableInstance;
    public checkDispoButtonsInstance;
    public deviceSummaryInstance;
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

    constructor(dispositionInstance: any) {
        super();
        this.dispositionInstance = dispositionInstance;
        this.storeManagerIns = this.dispositionInstance.getStoreManager()
        this.checkTableInstance = this.dispositionInstance.getChecksTable()
        this.jobReportTitle = this.dispositionInstance.getJobReportTitle();
        this.deviceSummaryInstance = this.dispositionInstance.getDeviceSummaryTable();
        this.progressBarInstance = this.dispositionInstance.getMantisStageProgressBar();
        this.detailJobActionSectionInstance = this.dispositionInstance.getDetailJobActionSection();
        this.createCheckStatusOptions()
        this.createCheckDispoButtons()
        this.createCheckNavigationTab()

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

    getDetailJobActionSection() {
        return this.detailJobActionSectionInstance;
    }

    getCheckTableColDefs(section?: string){
        return this.checkTableInstance.getColumnDefs(section);
    }

    getCheckTableDetailInfo(){
        return this.checkTableInstance.checkDetailInfo;
    }    


    getDeviceSummaryTables() {
        return this.deviceSummaryInstance;
    }
    
    getMantisStageProgressBars() {
        return this.progressBarInstance;
    }
}


export class MantisDispositionManagerConfig extends OrcModuleOperation{
    managerIns: MantisDispositionManager;
    dispositionInstance;
    jobReportTitle: string;

    constructor(public dispoParams: DispostionParameter) {
        super();
        const operation = this.dispoParams.mantisRecord.operation;        
        if (this.drcOperation.indexOf(operation) !== -1) {
            this.dispositionInstance = new DrcDispostion(this.dispoParams);
        } else if (this.lmcOperation.indexOf(operation) !== -1) {
            this.dispositionInstance = new LMCDispostion(this.dispoParams);
        } else if (this.validatorOperation.indexOf(operation) !== -1) {
            this.dispositionInstance = new DrcDispostion(this.dispoParams);
        } else {
            if('orc_ext' in this.dispoParams.mantisRecord.orc_record && this.dispoParams.mantisRecord.orc_record.orc_ext.fab == '1'){
                this.dispositionInstance = new OrcFtrfF7Dispostion(this.dispoParams);
            }else if('orc_ext' in this.dispoParams.mantisRecord.orc_record && this.dispoParams.mantisRecord.orc_record.orc_ext.fab == '7'){
                this.dispositionInstance = new OrcFtrfF7Dispostion(this.dispoParams);
            }else{
                this.dispositionInstance = new OrcDispostion(this.dispoParams);
            }
        }

        this.managerIns = new MantisDispositionManager(this.dispositionInstance)
        this.managerIns.dispoParams = this.dispoParams;
    }    

}
