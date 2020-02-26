import { BaseHandler } from './base';
import * as disposition from './../disposition/drc.disposition';
import { DispostionParameter } from './../disposition/base';

export class DrcHandler extends BaseHandler {

    handle(dispoParams){

        const param = this.getRequiredParam(dispoParams)
        const operation = param.operation;
        const flow = param.flow;
        const fab = param.fab;

        if (this.drcOperation.indexOf(operation) !== -1) {
            const abc = new disposition.DrcDispostion(dispoParams)
            return abc
        }

        return this.nextHandler.handle(dispoParams)

    }

}