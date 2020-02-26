import { OrcHandler } from './orc';
import { DrcHandler } from './drc';
import { LmcHandler } from './lmc';
import { BaseHandler } from './base';
import { DispostionParameter } from './../disposition/base';

export class MainDispoHandler {
    public disposition;

    public handlersClasses = [OrcHandler, DrcHandler, LmcHandler, BaseHandler]

    constructor(dispoParams: DispostionParameter){
        const handler = this.getDispositionHandlers()
        this.disposition = handler.handle(dispoParams)
        debugger;

    }

    public getDispositionHandlers(){
        //for (let  handlerClass of  this.handlersClasses){
        //    const ab =  new handlerClass()
        //    return handler
        //}

        const orcHandler = new OrcHandler()
        const lmcHandler = new LmcHandler()
        const drcHandler = new DrcHandler()
        const defaultHandler = new BaseHandler()

        orcHandler.setNextHandler(lmcHandler)
        lmcHandler.setNextHandler(drcHandler)
        drcHandler.setNextHandler(defaultHandler)

        return orcHandler
    }

}