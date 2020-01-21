import { OrcModuleOperation } from './common/operation.class';
import { DispostionParameter, DrcDispostion, LMCDispostion, ValidatorDispostion, OrcDispostion  } from './disposition';


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
    public dispoParams: DispostionParameter;
    public storeManagerIns;
    public jobReportTitle;

    constructor(dispositionInstance: any) {
        super();
        this.dispositionInstance = dispositionInstance;
        this.storeManagerIns = this.dispositionInstance.getStoreManager()
        this.checkTableInstance = this.dispositionInstance.getChecksTable()
        this.jobReportTitle = this.dispositionInstance.getJobReportTitle();
        this.checkDispoButtonsInstance = this.dispositionInstance.getCheckActionButtons();
        this.deviceSummaryInstance = this.dispositionInstance.getDeviceSummaryTable();
        this.progressBarInstance = this.dispositionInstance.getMantisStageProgressBar();
        this.detailJobActionSectionInstance = this.dispositionInstance.getDetailJobActionSection();
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

    getCheckActionButtons() {
        return this.checkDispoButtonsInstance.buttons;
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
            this.dispositionInstance = new OrcDispostion(this.dispoParams);
        }

        this.managerIns = new MantisDispositionManager(this.dispositionInstance)
        this.managerIns.dispoParams = this.dispoParams;
    }    

}
