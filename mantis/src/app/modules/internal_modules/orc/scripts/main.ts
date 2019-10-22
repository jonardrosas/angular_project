import { OrcModuleOperation } from './common/operation.class';
import { DispostionParameter, DrcDispostion, LMCDispostion, ValidatorDispostion, OrcDispostion  } from './disposition';
import { ReportSectionComponent } from './detail-job-report-sections/section-components';

interface MantisDispositionContainerInterface {
    dispositionInstance;
    checkTableInstance;
    checkDispoButtonsInstance;    
    deviceSummaryInstance;    
    reportSectionsComponents;
    jobReportTitle;
    dispoParams;
    progressBarInstance?;
}


export class MantisDispositionManager extends OrcModuleOperation implements MantisDispositionContainerInterface {
    public dispositionInstance;
    public checkTableInstance;
    public checkDispoButtonsInstance;
    public deviceSummaryInstance;
    public jobReportTitle: string;
    public reportSectionsComponents = ReportSectionComponent;
    public progressBarInstance;

    constructor(public dispoParams: DispostionParameter){
        super();
        const operation = this.dispoParams.mantisRecord.operation;
        this.jobReportTitle = `${operation} Job Report`;


        if (this.drcOperation.indexOf(operation) !== -1) {
            this.dispositionInstance = new  DrcDispostion(this.dispoParams);
        }else if(this.lmcOperation.indexOf(operation) !== -1){
            this.dispositionInstance = new  LMCDispostion(this.dispoParams);
        }else if(this.validatorOperation.indexOf(operation) !== -1){
            this.dispositionInstance = new ValidatorDispostion(this.dispoParams);
        } else {
            this.dispositionInstance = new OrcDispostion(this.dispoParams);
        }   
    }

    getCheckTableColDefs(){
        this.checkTableInstance = this.dispositionInstance.getChecksTable();
        return this.checkTableInstance.columnDefs;
    }

    getCheckActionButtons() {
        this.checkDispoButtonsInstance = this.dispositionInstance.getCheckActionButtons();
        return this.checkDispoButtonsInstance.buttons;
    }

    getDeviceSummaryTables() {
        this.deviceSummaryInstance = this.dispositionInstance.getDeviceSummaryTable();
        return this.deviceSummaryInstance;
    }
    
    getMantisStageProgressBars() {
        this.progressBarInstance = this.dispositionInstance.getMantisStageProgressBar();
        return this.progressBarInstance;
    }
}

