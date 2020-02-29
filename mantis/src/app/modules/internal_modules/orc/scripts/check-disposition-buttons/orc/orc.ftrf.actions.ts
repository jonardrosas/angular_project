import { OrcCheckDispositionButtonBase } from './orc.actions';
import * as _ENUMS from './../../enums';


export class OrcFtrfCheckDispositionButton extends OrcCheckDispositionButtonBase {

    constructor(public dispoParams){
        super(dispoParams);
        this.buttons[_ENUMS.TAB1.id] = [
            this.orcEscalateIst,
            this.orcChangeStatus,
            this.addNotes,
            this.addImage
        ]
        this.buttons[_ENUMS.TAB2.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]
        this._generateButtons()
    }

}

/* LEVEL3 */
export class OrcFtrfF1CheckDispositionButton extends OrcFtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.checkAsSoaRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()        
    }
}


export class OrcFtrfF7CheckDispositionButton extends OrcFtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.checkAsSoaRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()        
    }
}


export class OrcFtrfF8CheckDispositionButton extends OrcFtrfCheckDispositionButton {
    constructor(dispoParams){
        super(dispoParams)
        this.buttons[_ENUMS.TAB3.id] = [
            this.checkAsSoaRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this.buttons[_ENUMS.TAB4.id] = [
            this.checkRecommend,
            this.addNotes,
            this.addImage            
        ]        
        this._generateButtons()        
    }
}

