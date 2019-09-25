export class CheckBaseModel {
    public columnDefs;

    // fields
    public ruleNameField = { headerName: 'Rule Name', field: 'name', sortable: true, filter: true, checkboxSelection: true };
    public rawErrorCountField = {
        headerName: 'Raw Error Counts',
        field: 'hier_error_count',
        sortable: true, filter: true,
        cellRenderer: params => {
            return `${params.value}(${params.data.flat_error_count})`;
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
        }
    };
    public statusField = { headerName: 'Status', field: 'status', sortable: true, filter: true };
}
