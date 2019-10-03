import { OrcCheckStatus } from './operations.status';
import { OrcModuleOperation } from './../common/operation.class';
import { MantisRecordModel } from './../../models';

export class CheckchangeStatusMod extends OrcModuleOperation {
    public checkStatInstance;
    public statusGroup;

    constructor(public mantisRecord: MantisRecordModel) {
        super();
        const operation = this.mantisRecord.operation;
        const fab = this.mantisRecord.fab;
        if (this.orcOperation.indexOf(operation) !== -1) {
            this.checkStatInstance = new OrcCheckStatus(fab);
        } else {
            this.checkStatInstance = new OrcCheckStatus(fab);
        }
        this.statusGroup =  this.checkStatInstance.checkStatusGroup;
    }
}
