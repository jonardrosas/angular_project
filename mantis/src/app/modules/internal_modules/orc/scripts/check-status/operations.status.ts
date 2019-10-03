import { CheckStatusBase } from './status';
import { FAB } from '../common/fab';

export class OrcCheckStatus extends CheckStatusBase {
    constructor(private fab: string) {
        super();
        // if (this.fab === FAB.FAB1) {
        // }
    }
}
