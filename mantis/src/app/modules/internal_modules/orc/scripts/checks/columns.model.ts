import { CheckBaseModel } from './base-columns';

export class OrcCheckOpsModel extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.rawErrorCountField,
        this.assigedGroupField,
        this.assignedSoaGroupField,
        this.pdbViolationCountField,
        this.pdbValidatedField,
        this.statusField
    ];

    constructor(fab: string = 'all') {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }
}

export class LMCCheckOpsModel extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.subjobField,
        this.rawErrorCountField,
        this.assigedGroupField,
        this.assignedSoaGroupField,
        this.statusField
    ];
    constructor(fab: string = 'all') {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }
}

export class DrcCheckOpsModel extends CheckBaseModel {
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

    constructor(fab: string = 'all') {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }

}

export class ValidatorCheckOpsModel extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.rawErrorCountField,
        this.assignedGroupField,
        this.drcUtilField,
        this.statusField
    ];

    constructor(fab: string = 'all') {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }

}
