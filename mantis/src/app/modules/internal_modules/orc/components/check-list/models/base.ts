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
            return this.formatStatus(params.value)
        }
    };

    formatStatus(val){
        return `<button mat-mini-fab mat-raised-button type="button">${val}</button>`
    }

}
