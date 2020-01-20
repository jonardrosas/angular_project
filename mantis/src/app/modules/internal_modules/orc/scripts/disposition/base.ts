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
    checkTableStoreAssignedAction?;
    checkTableStoreAssignedSoaAction?;
    checkTableStoreAssignedIstSelector?;
    checkTableStoreAssignedSoaSelector?;    
    checkResolutionAction?;    
    checkResolutionSelector?;    
    checkResolutionOpenAction?;    
    checkResolutionOpenSelector?;      
    checkResolutionClosedAction?;    
    checkResolutionClosedSelector?;    

    checkCheckStatCountAction?;    
    checkCheckStatCountSelector?;    
}

export class MantisDispositionBase implements MantisDispositionBaseInterface {
    dispoParams: DispostionParameter;
    checkTableClass: any = null;
    checkTableButtonsClass = null;
    deviceSummaryClass = null;
    store;
    progressBarClass = null;
    detailJobActionSectionClass = null;
    checkTableStoreAction;
    checkTableStoreSelector;
    checkTableStoreAssignedAction;
    checkTableStoreAssignedSoaAction;
    checkTableStoreAssignedIstSelector;
    checkTableStoreAssignedSoaSelector;
    checkResolutionAction?;
    checkResolutionSelector?;
    checkResolutionOpenAction?;
    checkResolutionOpenSelector?;
    checkResolutionClosedAction?;
    checkResolutionClosedSelector?;

    checkCheckStatCountAction?;
    checkCheckStatCountSelector?;

    constructor(dispoParams: DispostionParameter) {
        this.dispoParams = dispoParams;
        if(dispoParams.store){
            this.store = dispoParams.store;
            // Use this temporary as default, need to be override on the subclass
            this.checkTableStoreAction = this.store.getRecordChecksAction;
            this.checkTableStoreSelector = this.store.getOrcRecordCheckStateSelector;
            this.checkTableStoreAssignedAction = this.store.getAssignedChecksAction;
            this.checkTableStoreAssignedSoaAction = this.store.getSoaChecksAction;
            this.checkTableStoreAssignedIstSelector = this.store.getIstCheckSelector;
            this.checkTableStoreAssignedSoaSelector = this.store.getSoaCheckSelector;
            this.checkResolutionSelector = this.store.getMantisResultionStateSelector;
            this.checkResolutionAction = this.store.getMantisResolutionAction;
            this.checkResolutionOpenAction = this.store.getMantisOpenResolutionAction;
            this.checkResolutionOpenSelector = this.store.getMantisOpenStatusStateSelector;
            this.checkResolutionClosedAction = this.store.getMantisCloseResolutionAction;
            this.checkResolutionClosedSelector = this.store.getMantisOpenStatusStateSelector;
            this.checkCheckStatCountAction = this.store.getRecordChecksStatCountAction;
            this.checkCheckStatCountSelector = this.store.getRecordCheckStatCountSelector;
        }
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
