import { CheckBaseModel } from './base-columns';

class OrcCheckOpsModel extends CheckBaseModel {
    constructor() {
        super();
        this.getColumnDefs();
    }

    getColumnDefs() {
        this.columnDefs = [
            this.ruleNameField,
            this.rawErrorCountField,
            this.assigedGroupField,
            this.assignedSoaGroupField,
            this.pdbViolationCountField,
            this.pdbValidatedField,
            this.statusField
        ];
    }
}

class LMCCheckOpsModel extends OrcCheckOpsModel {
    constructor() {
        super();
        this.getColumnDefs();
    }

    getColumnDefs() {
        this.columnDefs = [
            this.ruleNameField,
            this.subjobField,
            this.rawErrorCountField,
            this.assigedGroupField,
            this.assignedSoaGroupField,
            this.statusField
        ];
    }
}

class DrcCheckOpsModel extends CheckBaseModel {
    constructor() {
        super();
        this.getColumnDefs();
    }

    getColumnDefs() {
        this.columnDefs = [
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
    }

}

class ValidatorCheckOpsModel extends CheckBaseModel {
    constructor() {
        super();
        this.getColumnDefs();
    }

    getColumnDefs() {
        this.columnDefs = [
            this.ruleNameField,
            this.rawErrorCountField,
            this.assignedGroupField,
            this.drcUtilField,
            this.statusField
        ];
    }

}

export { OrcCheckOpsModel };
export { LMCCheckOpsModel };
export { DrcCheckOpsModel };
export { ValidatorCheckOpsModel };
