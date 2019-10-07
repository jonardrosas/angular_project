import { OrcModuleOperation } from './common/operation.class';
import { DispostionParameter, DrcDispostion, LMCDispostion, ValidatorDispostion, OrcDispostion  } from './disposition';

interface MantisDispositionContainerInterface {
    dispositionInstance;
    checkTableInstance;
    checkDispoButtonsInstance;    
    deviceSummaryInstance;    
}


export class MantisDispositionManager extends OrcModuleOperation {
    public dispositionInstance;
    public checkTableInstance;
    public checkDispoButtonsInstance;
    public deviceSummaryInstance;

    constructor(private dispoParams: DispostionParameter){
        super();
        const operation = this.dispoParams.mantisRecord.operation;
        const fab = this.dispoParams.mantisRecord.fab;
        const techtype = this.dispoParams.mantisRecord.techtype;

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

}

