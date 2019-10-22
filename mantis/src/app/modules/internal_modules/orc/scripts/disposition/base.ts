import { MantisRecordModel } from './../../models';
import {
    getOrcChecksAction,
    getiSTChecksAction,
    getSoaChecksAction,
    getOrcRecordCheckStateSelector,
    getIstCheckSelector,
    getSoaCheckSelector
} from './../../store/';

export interface DispostionParameter {
    mantisRecord: MantisRecordModel;
    modalService?;
    status?;
}


export interface MantisDispositionBaseInterface {
    dispoParams: DispostionParameter;
    deviceSummaryClass;
    checkTableClass;
    checkTableButtonsClass;
    checkTableStoreAction?;
    checkTableStoreSelector?;
    checkTableStoreAssignedIstAction?;
    checkTableStoreAssignedSoaAction?;
    checkTableStoreAssignedIstSelector?;
    checkTableStoreAssignedSoaSelector?;    
}

export class MantisDispositionBase implements MantisDispositionBaseInterface {
    dispoParams: DispostionParameter;
    checkTableClass = null;
    checkTableButtonsClass = null;
    deviceSummaryClass = null;
    progressBarClass = null;
    checkTableStoreAction;
    checkTableStoreSelector;
    checkTableStoreAssignedIstAction;
    checkTableStoreAssignedSoaAction;
    checkTableStoreAssignedIstSelector = getIstCheckSelector;
    checkTableStoreAssignedSoaSelector = getSoaCheckSelector;

    constructor(dispoParams: DispostionParameter) {
        this.dispoParams = dispoParams

        // Use this temporary as default, need to be override on the subclass
        this.checkTableStoreAction = getOrcChecksAction;
        this.checkTableStoreSelector = getOrcRecordCheckStateSelector;
        this.checkTableStoreAssignedIstAction = getiSTChecksAction;
        this.checkTableStoreAssignedSoaAction = getSoaChecksAction;
    }    

    getChecksTable(){
        if(this.checkTableClass){
            return new this.checkTableClass(this.dispoParams)
        }
        throw new Error('checkTableClass required')
    }

    getCheckActionButtons(){
        if(this.checkTableButtonsClass){
            return new this.checkTableButtonsClass(this.dispoParams);
        }
        throw new Error('checkTableButtonsClass required')

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
}
