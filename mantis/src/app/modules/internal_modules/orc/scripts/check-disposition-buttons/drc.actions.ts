import { CheckDisposeButtonBase } from './base';

export class DrcCheckDispositionButtonClass extends CheckDisposeButtonBase {
    public rvAssignment = {
        label: 'Finalize Recommendation',
        type: 'btn-group',
        class: 'btn btn-danger btn-sm'
    }    
 
    constructor(private dispoParams){
        super(dispoParams);
        this.buttons = [
            this.rvAssignment,
            this.addNotes
        ]
    }

}