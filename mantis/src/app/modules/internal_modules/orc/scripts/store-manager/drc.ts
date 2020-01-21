import { StoreBaseManager } from './base';


export class DrcStoreManager extends StoreBaseManager{
    checkTableStoreAction;
    checkTableStoreAssignedIstAction;
    checkTableStoreAssignedSoaAction;

    constructor(store){
        super(store)
        this.checkTableStoreAction = store.getDrcChecksAction;
        this.checkTableStoreAssignedIstAction = store.getDrciSTChecksAction;
        this.checkTableStoreAssignedSoaAction = store.getDrcSoaChecksAction;        
    }

}