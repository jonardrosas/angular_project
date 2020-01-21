import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';
import { 
    MantisDispositionManagerConfig,
    DispostionParameter,
    MantisDispositionBaseInterface,
    MantisDispositionManager
} from './../scripts';
import { NgbModal } from './../../../third_party_modules/ng_bootstrap';

@Injectable()
export class DispoMangerService {
    public dispoManagerInstance: MantisDispositionManager;
    // public dispositionInstance: MantisDispositionBaseInterface;
    public dispoMangerSubject = new BehaviorSubject({} as MantisDispositionManager);
    private defaultParams;
    private params;
    public config;

    constructor(
        private modalService: NgbModal,
    ) {
        this.defaultParams = {
            modalService: this.modalService,
        }
    }    

    initialized(params: DispostionParameter){
        this.params = {
            ...this.params,
            ...this.defaultParams,
            ...params
        }
        this.config = new MantisDispositionManagerConfig(this.params);
        this.dispoManagerInstance = this.config.managerIns;
        this.dispoMangerSubject.next(this.dispoManagerInstance)
        return this.dispoManagerInstance;
    }
    
}
