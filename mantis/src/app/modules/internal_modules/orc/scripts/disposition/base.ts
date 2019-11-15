import { MantisRecordModel } from './../../models';
export interface DispostionParameter {
    mantisRecord: MantisRecordModel;
    modalService?;
    status?;
    registeredCheckPopUps?;
    store?;
}


export interface MantisDispositionBaseInterface {
    dispoParams: DispostionParameter;
    deviceSummaryClass;
    checkTableClass;
    checkTableButtonsClass;
    store;
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
    store;
    progressBarClass = null;
    detailJobActionSectionClass = null;
    checkTableStoreAction;
    checkTableStoreSelector;
    checkTableStoreAssignedIstAction;
    checkTableStoreAssignedSoaAction;
    checkTableStoreAssignedIstSelector;
    checkTableStoreAssignedSoaSelector;

    constructor(dispoParams: DispostionParameter) {
        this.dispoParams = dispoParams
        this.store = dispoParams.store;
        // Use this temporary as default, need to be override on the subclass
        this.checkTableStoreAction = this.store.getOrcChecksAction;
        this.checkTableStoreSelector = this.store.getOrcRecordCheckStateSelector;
        this.checkTableStoreAssignedIstAction = this.store.getiSTChecksAction;
        this.checkTableStoreAssignedSoaAction = this.store.getSoaChecksAction;
        this.checkTableStoreAssignedIstSelector = this.store.getIstCheckSelector;
        this.checkTableStoreAssignedSoaSelector = this.store.getSoaCheckSelector;
    }   
    getDetailJobActionSection(){
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
