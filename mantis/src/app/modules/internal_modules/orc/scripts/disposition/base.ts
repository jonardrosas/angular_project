import { MantisRecordModel } from './../../models';

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
}

export class MantisDispositionBase implements MantisDispositionBaseInterface {
    dispoParams: DispostionParameter;
    checkTableClass = null;
    checkTableButtonsClass = null;
    deviceSummaryClass = null;

    constructor(dispoParams: DispostionParameter) {
        this.dispoParams = dispoParams
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

}
