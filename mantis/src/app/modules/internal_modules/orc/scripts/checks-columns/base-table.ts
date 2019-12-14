/****
 Check default column definition
 ****/
import * as CONST from './../enums';

interface CheckTableInterface {
    columnDefs;
    checkDetailInfo;
    setColumnDefs(): void;
}


export class CheckFields {
    public idField = {
        headerName:  'Id',
        field: 'id',
        sortable: true,
    };
    public ruleNameField = {
        headerName: 'Rule Name',
        field: 'name',
        sortable: true,
        filter: true,
        checkboxSelection: true,
        width: 130,
        headerCheckboxSelection: true,
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
    public drcDescriptionField = {
        headerName: 'DRC Description',
        field: 'check',
        sortable: true,
        filter: true,
        valueGetter(params) {
            const data_list = [];
            if(params.data.check && params.data.check.length > 0){
                for (const key in params.data.check) {
                    data_list.push(params.data.check[key].descr);
                }
            }
            return data_list.join(', ')
        }   
    };    

    public drcUtilField = {
        headerName: 'DRC Util',
        field: 'drc_util',
        sortable: true,
        filter: true ,
        valueGetter(params) {
            const data_list = [];
            if(params.data.check && params.data.check.length > 0){
                for (const key in params.data.check) {
                    data_list.push(params.data.check[key].drc_util);
                }
            }
            return data_list.join(', ')
        }  
    };
    public comparisonResultField = { headerName: 'Comparision Result', field: '' };
    public comparatorCheckReviewStatus = { headerName: 'Check Review Status', field: '' };
    public assignedGroupField = {
        headerName: 'Assigned Group',
        field: 'reviews',
        cellRenderer: params => {
            const assignedGroups = [];
            if(params.data.reviews && params.data.reviews.length > 0){
                for (const review in params.data.reviews) {
                    const reviewObj =  params.data.reviews[review];
                    if(reviewObj.new_status == 'iST' && reviewObj.assigned_group){
                        assignedGroups.push(reviewObj.assigned_group.name);
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
            if(params.data.checkassessments && params.data.checkassessments.length > 0){
                for (const review in params.data.checkassessments) {
                    assignedGroups.push(params.data.checkassessments[review].assigned_group.name);
                }
            }
            const assignedGroupStr = assignedGroups.join(', ')
            return assignedGroupStr;
        }
    };    


    formatStatus(val) {
        debugger;
        return `<button [ngClass]="getClass()" type="button">${val}</button>`;
    }

    getClass(){
        return 'btn btn-danger';
    }    

}

export class CheckBaseModel extends CheckFields implements CheckTableInterface {
    columnDefs: any[];
    assessmentDefs: any[];
    statusCellTemplate;
    checkDetailInfo = [
        this.idField,
        this.ruleNameField,
        this.rawErrorCountField,
        this.statusField
    ]
    checkReviewColumn = [
        {headerName: 'Date', field: 'date', col: 2},
        {headerName: 'User', field: 'user', col: 2},
        {headerName: 'Assigned Group', field: 'assigned_group', col: 2, relatedName: 'name'},
        {headerName: 'Old Status', field: 'old_status', col: 1},
        {headerName: 'New Status', field: 'new_status', col: 1},
        {headerName: 'Comments', field: 'comments', col: 4},
    ]

    checkAssessmentColumn = [
        {headerName: 'Date', field: 'date', col: 2},
        {headerName: 'User', field: 'user', col: 2},
        {headerName: 'Assigned Group', field: 'assigned_group', col: 2, relatedName: 'name'},
        {headerName: 'Recommendation', field: 'assessment', col: 2},
        {headerName: 'Comments', field: 'comments', col: 4},
    ]

    constructor() {
        super()
        this.setColumnDefs()
        this.setAssessmentColumn()
    }

    setAssessmentColumn(){
        this.assessmentDefs = [
            this.ruleNameField,
            this.rawErrorCountField,
            this.assignedGroupField,
            this.assignedSoaGroupField,
            this.pdbViolationCountField,
            this.pdbValidatedField,
            this.statusField            
        ];
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

    getColumnDefs(section?) {
        if(section == CONST.TAB3){
            return this.assessmentDefs;
        }
        return this.columnDefs;
    }

}
