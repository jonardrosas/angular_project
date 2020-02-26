import { BaseHandler } from './base';
import * as disposition from './../disposition/lmc.disposition';
import { DispostionParameter } from './../disposition/base';

export class LmcHandler extends BaseHandler {

    handle(dispoParams){
        const param = this.getRequiredParam(dispoParams)
        const operation = param.operation;
        const flow = param.flow;
        const fab = param.fab;

        if (this.lmcOperation.indexOf(operation) !== -1) {
            return new disposition.LMCDispostion(dispoParams)
        }

        return this.nextHandler.handle(dispoParams)
    }



}