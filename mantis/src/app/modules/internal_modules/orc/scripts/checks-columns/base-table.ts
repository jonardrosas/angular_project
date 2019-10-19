/****
 Check default column definition
 ****/

interface CheckTableInterface {
    columnDefs;
    setColumnDefs(): void;
}

export class CheckBaseModel implements CheckTableInterface {
    columnDefs: object[];
    statusCellTemplate;
    public ruleNameField = {
        headerName: 'Rule Name',
        field: 'name',
        sortable: true,
        filter: true,
        checkboxSelection: true,
        width: 130,
        headerCheckboxSelection: true
    };
    public rawErrorCountField = {
        headerName: 'Raw Error Counts',
        field: 'hier_error_count',
        sortable: true, filter: true,
        cellRenderer: params => {
            return `${params.value}(${params.data.flat_error_count})`;
        },
        width: 100
    };
    public statusField = {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        width: 60,
        cellRenderer: 'checkStatusTemplateComponent',
    };
    public pdbViolationCountField = {
        headerName: 'PDB Violation counts',
        field: 'vio_count',
        sortable: true, width: 50,
        valueGetter(params) {
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
    public subjobField = {
        headerName: 'Subjob',
        field: 'sub_job',
        sortable: true,
        filter: true,
        cellRenderer: params => {
            return `${params.value}`;
        }
    };
    public defaultRvField = {
        headerName: 'Default RV',
        field: 'rule_owner',
        sortable: true,
        filter: true ,
        valueGetter(params) {
            if(params.data.rule_owner){
                return params.data.rule_owner.drc_rule_owner;
            }
            return '';
        }        
    };
    public assignedRvField = { 
        headerName: 'Assigned RV',
        field: 'checkassessments',
        cellRenderer: params => {
            const assignedGroups = [];
            if(params.data.checkassessments.length > 0){
                for (const review in params.data.checkassessments) {
                    assignedGroups.push(params.data.checkassessments[review].assigned_group.name);
                }
            }
            const assignedGroupStr = assignedGroups.join(', ')
            return assignedGroupStr;
        }        
    }        
    public drcDescriptionField = {
        headerName: 'DRC Description',
        field: 'check',
        sortable: true,
        filter: true,
        valueGetter(params) {
            const data_list = [];
            if(params.data.check.length > 0){
                for (const key in params.data.check) {
                    data_list.push(params.data.check[key].desc);
                }
            }
            return data_list.join(', ')
        }   
    };
    public drcUtilField = { headerName: 'DRC Util', field: 'drc_util', sortable: true, filter: true };
    public comparisonResultField = { headerName: 'Comparision Result', field: '' };
    public comparatorCheckReviewStatus = { headerName: 'Check Review Status', field: '' };
    public assignedGroupField = {
        headerName: 'Assigned Group',
        field: 'reviews',
        cellRenderer: params => {
            const assignedGroups = [];
            if(params.data.reviews.length > 0){
                for (const review in params.data.reviews) {
                    if(params.data.reviews[review].assigned_group){
                        assignedGroups.push(params.data.reviews[review].assigned_group.name);
                    }
                }
            }
            const assignedGroupStr = assignedGroups.join(', ')
            return assignedGroupStr;
        }
    };

    public assignedSoaGroupField = {
        headerName: 'Assigned SOA',
        field: 'checkassessments',
        cellRenderer: params => {
            const assignedGroups = [];
            if(params.data.checkassessments.length > 0){
                for (const review in params.data.checkassessments) {
                    assignedGroups.push(params.data.checkassessments[review].assigned_group.name);
                }
            }
            const assignedGroupStr = assignedGroups.join(', ')
            return assignedGroupStr;
        }
    };


    constructor() {
        this.setColumnDefs()
    }

    formatStatus(val) {
        debugger;
        return `<button [ngClass]="getClass()" type="button">${val}</button>`;
    }

    getClass(){
        debugger;
        return 'btn btn-danger';
    }

    /* Default Columns Incase Operation is unknown */
    setColumnDefs() {
        this.columnDefs = [
            this.ruleNameField,
            this.rawErrorCountField,
            this.assignedGroupField,
            this.assignedSoaGroupField,
            this.pdbViolationCountField,
            this.pdbValidatedField,
            this.statusField
        ];
    }

    getColumnDefs() {
        return this.columnDefs;
    }

}
