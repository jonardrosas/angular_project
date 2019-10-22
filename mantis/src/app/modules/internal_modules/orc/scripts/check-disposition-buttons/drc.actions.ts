import { CheckDisposeButtonBase, CheckDisposeButtonInterface } from './base';


export class DrcCheckDispositionButtonBase extends CheckDisposeButtonBase {
    public rvAssignment = {
        label: 'Finalize Recommendation',
        type: 'btn-group',
        class: 'btn btn-danger btn-sm'
    }    
 
    constructor(private dispoParams){
        super(dispoParams);
        this.allCheckButtons = [
            this.rvAssignment,
            this.addNotes
        ]
    }    
}

export class DrcPtrfCheckDispositionButtonBase extends DrcCheckDispositionButtonBase {}
export class DrcRitCheckDispositionButtonBase extends DrcCheckDispositionButtonBase {}
export class DrcFtrfCheckDispositionButtonBase extends DrcCheckDispositionButtonBase {}


export class DrcCheckDispositionButtonClass {
    private instance;
    public buttons: CheckDisposeButtonInterface = {};

    constructor(private dispoParams){
        if (this.dispoParams.mantisRecord.ptrf.startsWith("PTRF")){
            this.instance = new DrcPtrfCheckDispositionButtonBase(dispoParams)
        }else if(this.dispoParams.mantisRecord.ptrf.startsWith("RIT")){
            this.instance = new DrcRitCheckDispositionButtonBase(dispoParams)
        }else if(this.dispoParams.mantisRecord.ptrf.startsWith("FTRF")){
            this.instance = new DrcFtrfCheckDispositionButtonBase(dispoParams)
        }else{
            this.instance = new DrcCheckDispositionButtonBase(dispoParams)
        }
        this.buttons.allCheckButtons =  this.instance.allCheckButtons;
        this.buttons.iSTCheckButtons =  this.instance.iSTCheckButtons;
        this.buttons.sOACheckButtons =  this.instance.sOACheckButtons;
    }        

}