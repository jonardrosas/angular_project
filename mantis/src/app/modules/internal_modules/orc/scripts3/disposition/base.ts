import { MantisRecordModel } from './../../models';

export interface DispostionParameter {
    mantisRecord: MantisRecordModel;
    modalService?;
    status?;
}

export class MantisDispositionBase implements MantisDispositionBase {
    checkTableClass = null;
    checkTableButtonsClass = null;
    deviceSummaryClass = null;
    checkStatusClass = null;
    dispoParams: DispostionParameter;
    checkTableButtonsInstance;

    getChecksTable(){
        if(this.checkTableClass){
            return new this.checkTableClass(this.dispoParams)
        }
        throw new Error('checkTableClass required')
    }

    getCheckActionButtons(){
        if(this.checkTableButtonsClass){
            if(this.checkStatusClass){
                const checkStatusInstance = new this.checkStatusClass()
                const status = checkStatusInstance.checkStatusGroup;
                this.dispoParams.status = status;
            }

            this.checkTableButtonsInstance = new this.checkTableButtonsClass(this.dispoParams);
            return this.checkTableButtonsInstance;
        }
        throw new Error('checkTableButtonsClass required')

    }

    getDeviceSummaryTable(){
        if(this.deviceSummaryClass){
            return new this.deviceSummaryClass(this.dispoParams)
        }
        throw new Error('deviceSummaryClass required')
    }

    getcheckStatusClass(){
        if(this.checkStatusClass){
            return new this.checkStatusClass()
        }
        throw new Error('checkStatusclass is required')
    }    
}
