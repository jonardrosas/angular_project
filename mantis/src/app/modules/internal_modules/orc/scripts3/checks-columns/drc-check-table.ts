
import { CheckBaseModel } from './base-table';


export class DrcCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.rawErrorCountField,
        this.defaultRvField,
        this.assignedRvField,
        this.drcDescriptionField,
        this.drcUtilField,
        this.comparisonResultField,
        this.comparatorCheckReviewStatus,
        this.statusField
    ];

    constructor(private dispoParams) {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }

}