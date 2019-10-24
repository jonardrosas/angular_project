import { BehaviorSubject } from 'rxjs'
import { Injectable } from '@angular/core';
import { MantisDispositionManager, DispostionParameter, MantisDispositionBaseInterface } from './../scripts';
import { NgbModal } from './../../../third_party_modules/ng_bootstrap';

@Injectable()
export class DispoMangerService {
    public dispoMangerInstance: MantisDispositionManager;
    // public dispositionInstance: MantisDispositionBaseInterface;
    public dispoMangerSubject = new BehaviorSubject({} as MantisDispositionManager);
    private defaultParams;
    private params;

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
        this.dispoMangerInstance = new MantisDispositionManager(this.params);
        // this.dispositionInstance = this.dispoMangerInstance.dispositionInstance;
        this.dispoMangerSubject.next(this.dispoMangerInstance)
        return this.dispoMangerInstance;
    }
    
}
