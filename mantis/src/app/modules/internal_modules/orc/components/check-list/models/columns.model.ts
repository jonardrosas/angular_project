import { CheckBaseModel } from './base';

class OrcCheckOpsModel extends CheckBaseModel {
    public assigedGroupField = { headerName: 'Assigned Group', field: '', sortable: true, filter: true,  width: 50 };
    public assignedSoaGroupField = { headerName: 'Assigned SOA Group', field: 'assigned_soa_groups', sortable: true, filter: true,  width: 50 };
    public pdbViolationCountField = {
        headerName: 'PDB Violation counts',
        field: 'vio_count',
        sortable: true, width: 50,
        valueGetter(params){
            return params.data.vio_cnt;
        }
    };
    public pdbValidatedField = {
        headerName: 'PDB validated',
        field: 'validated',
        sortable: true,
        filter: true,
        cellRenderer: params => {
            if (params.value) {
                return 'Y';
            } else {
                return 'N';
            }
        },
        width: 90
    };

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
    public subjobField = {
        headerName: 'Subjob',
        field: 'sub_job',
        sortable: true,
        filter: true,
        cellRenderer: params => {
            return `${params.value}`;
        }
    };
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
    public subjobField: string;
    public defaultRvField = { headerName: 'Default RV', field: '', sortable: true, filter: true };
    public assignedRvField = { headerName: 'Assigned RV', field: '', sortable: true, filter: true };
    public drcDescriptionField = { headerName: 'DRC Description', field: 'drc_desc', sortable: true, filter: true };
    public drcUtilField = { headerName: 'DRC Util', field: 'drc_util', sortable: true, filter: true };
    public comparisonResultField = { headerName: 'Comparision Result', field: ''};
    public comparatorCheckReviewStatus = { headerName: 'Check Review Status', field: ''};

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
    public assignedGroupField = {
        headerName: 'Assigned Group',
        field: 'assigned_group',
        cellRenderer: params => {
            let assignedGroups = [];
            for(let review in params.reviews){
                if(params.reviews[review]){
                    assignedGroups.push(params.reviews[review])
                }
            }
        }        
    };
    public drcDescriptionField = { headerName: 'DRC Description', field: 'drc_desc', sortable: true, filter: true };
    public drcUtilField = { headerName: 'DRC Util', field: 'drc_util', sortable: true, filter: true };

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
