import { OrcModuleOperation } from './../common/operation.class';
import { DispostionParameter, MantisDispositionBase, OrcDispostion } from './../disposition/';

export interface Handler {
    setNextHandler(h: Handler): void;
    handle(dispoParams: DispostionParameter)
}

interface ReqParamsInterface {
    operation: string;
    fab: string;
    flow: string;
}

export class BaseHandler extends OrcModuleOperation implements  Handler {

    public nextHandler: Handler;

    setNextHandler(nextHandler: Handler){
        this.nextHandler = nextHandler;
    }

    getRequiredParam(dispoParams: DispostionParameter){
        const params: ReqParamsInterface = {
            operation: dispoParams.mantisRecord.operation,
            flow: dispoParams.mantisRecord.ptrf,
            fab: dispoParams.mantisRecord.orc_record.orc_ext.fab
        }
        return params;
    }

    handle(dispoParams: DispostionParameter){
        return new OrcDispostion(dispoParams)
    }

}
