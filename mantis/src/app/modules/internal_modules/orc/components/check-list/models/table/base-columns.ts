
/****
 Check default column definition
 ****/


export class CheckBaseModel {
    public columnDefs;
    public ruleNameField = {
        headerName: 'Rule Name',
        field: 'name',
        sortable: true,
        filter: true,
        checkboxSelection: true,
        width: 100,
        headerCheckboxSelection: true
    };
    public rawErrorCountField = {
        headerName: 'Raw Error Counts',
        field: 'hier_error_count',
        sortable: true, filter: true,
        cellRenderer: params => {
            return `${params.value}(${params.data.flat_error_count})`;
        },
        width: 30
    };
    public statusField = {
        headerName: 'Status',
        field: 'status',
        sortable: true,
        filter: true,
        width: 30,
        cellRenderer: params => {
            return this.formatStatus(params.value);
        }
    };
    public assigedGroupField = { headerName: 'Assigned Group', field: '', sortable: true, filter: true, width: 50 };
    public assignedSoaGroupField = {
        headerName: 'Assigned SOA Group', field: 'assigned_soa_groups', sortable: true, filter: true, width: 50
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
    public defaultRvField = { headerName: 'Default RV', field: '', sortable: true, filter: true };
    public assignedRvField = { headerName: 'Assigned RV', field: '', sortable: true, filter: true };
    public drcDescriptionField = { headerName: 'DRC Description', field: 'drc_desc', sortable: true, filter: true };
    public drcUtilField = { headerName: 'DRC Util', field: 'drc_util', sortable: true, filter: true };
    public comparisonResultField = { headerName: 'Comparision Result', field: '' };
    public comparatorCheckReviewStatus = { headerName: 'Check Review Status', field: '' };
    public assignedGroupField = {
        headerName: 'Assigned Group',
        field: 'assigned_group',
        cellRenderer: params => {
            const assignedGroups = [];
            for (const review in params.reviews) {
                if (params.reviews[review]) {
                    assignedGroups.push(params.reviews[review]);
                }
            }
        }
    };

    formatStatus(val) {
        return `<button mat-mini-fab mat-raised-button type="button">${val}</button>`;
    }

}
