import { OrcCheckOpsModel, LMCCheckOpsModel, DrcCheckOpsModel } from './columns.model';
import { OrcRecordModel } from './../../../models/orcrecord.model';

class CheckTableModel {
    public columnDefs;
    public table;

    // Registed Flow by Operation
    orcFlow = ['ORC'];
    lmcFlow = ['LMC'];
    drcFlow = ['DRC', 'PDKDRC'];
    dfmFlow = ['DFM'];

    constructor(private orcRecord: OrcRecordModel) {
        const operation = this.orcRecord.operation;
        if (this.lmcFlow.indexOf(operation) !== -1) {
            this.table = new LMCCheckOpsModel();
        } else if ( this.drcFlow.indexOf(operation) !== -1 ) {
            this.table = new DrcCheckOpsModel();
        } else {
            this.table = new OrcCheckOpsModel();
        }
        this.columnDefs = this.table.columnDefs;
    }

}

export { CheckTableModel };
