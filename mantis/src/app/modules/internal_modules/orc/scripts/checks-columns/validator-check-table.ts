import { CheckBaseModel } from './base-table';


export class ValidatorCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.rawErrorCountField,
        this.assignedGroupField,
        this.drcUtilField,
        this.statusField
    ];

    constructor(private dispoParams) {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }

}