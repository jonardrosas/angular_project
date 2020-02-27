
export class StoreBaseManager{
    checkTableStoreAction;
    checkZeroTableStoreAction;
    checkTableStoreSelector;
    checkZeroTableStoreSelector;
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
    iSTGroupSelector?;
    iSTGroupDispatchAction?;

    constructor(public store: any){
        this.checkTableStoreAction = this.store.getRecordChecksAction;
        this.checkZeroTableStoreAction = this.store.getRecordCheckZeroAction;
        this.checkTableStoreSelector = this.store.getOrcRecordCheckStateSelector;
        this.checkZeroTableStoreSelector = this.store.getOrcRecordCheckZeroStateSelector;
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
        this.iSTGroupSelector = this.store.getIstSupportTeamGroupSelector;
        this.iSTGroupDispatchAction = this.store.getIstGroupAction;
    }
}