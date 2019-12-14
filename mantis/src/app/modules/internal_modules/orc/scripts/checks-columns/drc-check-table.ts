import { CheckBaseModel } from './base-table';
import * as CONST from './../enums';


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

    public mainTabs = [
        { id: CONST.TAB1.id, title: 'All Checks'},
        { id: CONST.TAB2.id, title: 'Assigned iST'},
        { id: CONST.TAB3.id, title: 'Assigned SOA'},
    ];      

    constructor(private dispoParams) {
        super();
    }

    getColumnDefs() {
        return this.columnDefs;
    }

}