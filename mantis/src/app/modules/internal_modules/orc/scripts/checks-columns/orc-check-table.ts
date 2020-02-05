import { CheckBaseModel } from './base-table';
import * as CONST from './../enums';

export class OrcCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
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

}
