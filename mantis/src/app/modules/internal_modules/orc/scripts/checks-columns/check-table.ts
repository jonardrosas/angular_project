import { CheckBaseModel } from './base-table';


export class OrcCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.rawErrorCountField,
        this.assigedGroupField,
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


export class LMCCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.subjobField,
        this.rawErrorCountField,
        this.assigedGroupField,
        this.assignedSoaGroupField,
        this.statusField
    ];

    constructor(private dispoParams) {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }
}


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
