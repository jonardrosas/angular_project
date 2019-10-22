import { CheckStatusBase } from './base';
import { FAB } from '../common/fab';

export class OrcCheckStatusClass extends CheckStatusBase {

    constructor(private fab: string) {
        super();
        // this.setGroupStatus();
    }
}


export class DrcCheckStatusClass extends CheckStatusBase {
    public checkStatus = [
        { value: 'N', label: 'N: new', group: 'New' },
        { value: 'A', label: 'A: assigned', group: 'Assigned' },
    ]

    constructor(private fab: string) {
        super();
    }
}


export class DfmCheckStatusClass extends CheckStatusBase {
    constructor(private fab: string) {
        super();
    }
}
