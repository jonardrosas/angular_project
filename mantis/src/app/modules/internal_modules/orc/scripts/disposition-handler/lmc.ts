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
            if(flow.toUpperCase().startsWith('PTRF')){
                return new disposition.LMCPtrfDispostion(dispoParams)
            }else if(flow.toUpperCase().startsWith('FTRF')){
                if(fab == '7'){
                   return new disposition.LMCFtrfF7Dispostion(dispoParams)
                }else{
                   return new disposition.LMCFtrfDispostion(dispoParams)
               }                   
            }else if(flow.toUpperCase().startsWith('RIT')){
                if(fab == '7'){
                   return new disposition.LMCRitF7Dispostion(dispoParams)
                }else{
                   return new disposition.LMCRitDispostion(dispoParams)
               }                
            }else{
                return new disposition.LMCDispostion(dispoParams)
            }
        }

        return this.nextHandler.handle(dispoParams)
    }



}