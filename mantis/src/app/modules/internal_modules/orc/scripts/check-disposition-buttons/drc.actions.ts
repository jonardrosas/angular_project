import { CheckDisposeButtonBase } from './base';
import * as _ENUMS from './../enums';


export class DrcCheckDispositionButtonBase extends CheckDisposeButtonBase {
    public rvAssignment = {
        label: 'Finalize Recommendation',
        type: 'btn-group',
        class: 'btn btn-danger btn-sm'
    }    
 
    constructor(private dispoParams){
        super(dispoParams);
        this.buttons[_ENUMS.TAB1.id] = [
            this.rvAssignment,
            this.addNotes
        ]
    }    
}

export class DrcPtrfCheckDispositionButtonBase extends DrcCheckDispositionButtonBase {}
export class DrcRitCheckDispositionButtonBase extends DrcCheckDispositionButtonBase {}
export class DrcFtrfCheckDispositionButtonBase extends DrcCheckDispositionButtonBase {}

export class DrcPtrfF7CheckDispositionButtonBase extends DrcPtrfCheckDispositionButtonBase {}
export class DrcPtrfF8CheckDispositionButtonBase extends DrcPtrfCheckDispositionButtonBase {}
export class DrcPtrfF1CheckDispositionButtonBase extends DrcPtrfCheckDispositionButtonBase {}

