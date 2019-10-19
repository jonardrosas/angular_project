import { CheckBaseModel } from './base-table';


export class LMCCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.subjobField,
        this.rawErrorCountField,
        this.assignedGroupField,
        this.assignedSoaGroupField,
        this.pdbViolationCountField,
        this.pdbValidatedField,        
        this.statusField
    ];

    constructor(private dispoParams) {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }
}