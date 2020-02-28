import { BaseHandler, Handler } from './base';
import * as disposition from './../disposition/orc.disposition';
import { DispostionParameter } from './../disposition/base';

export class OrcHandler extends BaseHandler {

    handle(dispoParams){
        const param = this.getRequiredParam(dispoParams)
        const operation = param.operation;
        const flow = param.flow;
        const fab = param.fab;

        if (this.orcOperation.indexOf(operation) !== -1) {
            if(flow.toUpperCase().startsWith('PTRF')){
                if(fab == '7'){
                   return new disposition.OrcPtrfF7Dispostion(dispoParams)
                }else if(fab == '1'){
                   return new disposition.OrcPtrfF1Dispostion(dispoParams)
                }else{
                   return new disposition.OrcPtrfDispostion(dispoParams)
               }
            }else if(flow.toUpperCase().startsWith('FTRF')){
                if(fab == '7'){
                   return new disposition.OrcFtrfF7Dispostion(dispoParams)
                }else if(fab == '1'){
                   return new disposition.OrcFtrfF1Dispostion(dispoParams)
                }else{
                   return new disposition.OrcFtrfDispostion(dispoParams)
               }
            }else if(flow.toUpperCase().startsWith('RIT')){
                 return new disposition.OrcRitF7Dispostion(dispoParams)
            }else{
               return new disposition.OrcDispostion(dispoParams)
            }
        }
        return this.nextHandler.handle(dispoParams)
    }



}