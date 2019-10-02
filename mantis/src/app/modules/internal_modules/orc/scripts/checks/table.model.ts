import {
    OrcCheckOpsModel,
    LMCCheckOpsModel,
    DrcCheckOpsModel,
    ValidatorCheckOpsModel
} from './columns.model';

import { OrcRecordModel } from './../../models';
import { OrcModuleOperation } from './../common/operation.class';


interface OrcModuleCheckTable {
    columnDefs;
    createColumns(): void;
}


export class CheckTableModel extends OrcModuleOperation implements OrcModuleCheckTable {
    public columnDefs;
    private columnInstance;

    constructor(private orcRecord: OrcRecordModel) {
        super();
        this.createColumns();
    }

    public createColumns() {
        const operation = this.orcRecord.operation;
        const fab = this.orcRecord.fab;
        if (this.lmcOperation.indexOf(operation) !== -1) {
            this.columnInstance = new LMCCheckOpsModel(fab);
        } else if ( this.drcOperation.indexOf(operation) !== -1 ) {
            this.columnInstance = new DrcCheckOpsModel(fab);
        } else if ( this.validatorOperation.indexOf(operation) !== -1 ) {
            this.columnInstance = new ValidatorCheckOpsModel(fab);
        } else {
            this.columnInstance  = new OrcCheckOpsModel(fab);
        }
        this.columnDefs = this.columnInstance.columnDefs;
    }

    public getColumnDefs() {
        return this.columnDefs;
    }

}

