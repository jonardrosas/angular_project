import { CheckBaseModel } from './base-table';
import * as CONST from './../enums';


export class LMCCheckTable extends CheckBaseModel {
    columnDefs = [
        this.ruleNameField,
        this.subjobField,
        this.rawErrorCountField,
        this.assignedGroupField,
        this.assignedSoaGroupField,
        this.pdbViolationCountField,
        this.pdbValidatedField,        
        this.statusField
    ];

    public mainTabs = [
        { id: CONST.TAB1.id, title: 'All Checks'},
        { id: CONST.TAB2.id, title: 'Assigned iST'},
        { id: CONST.TAB3.id, title: 'Assigned SOA'},
        { id: CONST.TAB4.id, title: 'Assigned fST'},
    ];       

    constructor(private dispoParams) {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }
}