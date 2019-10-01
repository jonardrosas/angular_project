import { OrcCheckOpsModel, LMCCheckOpsModel, DrcCheckOpsModel, ValidatorCheckOpsModel } from './columns.model';
import { OrcRecordModel } from './../../../../models/orcrecord.model';

class CheckTableModel {
    public columnDefs;
    public table;

    // Registed Flow by Operation
    orcFlow = ['ORC', 'OPCV', 'ORC_DEV', 'decomp', 'target', 'pm', 'opc', 'matchXOR', 'opc_orc', 'MRC'];
    lmcFlow = ['LMC', 'TFLEXLMC_WRAPPER'];
    pgrcFlow = ['pgrc'];
    validatorFlow = ['Validator'];
    drcFlow = ['DRC', 'PDKDRC', 'FABDRC', 'PFDRC', 'ENGDRC', 'FrameDRC', 'POSTDSDRC', 'FAB_DRC'];
    dfmFlow = ['DFM'];

    constructor(private orcRecord: OrcRecordModel) {
        this.setTable();
    }

    private setTable() {
        const operation = this.orcRecord.operation;
        const fab = this.orcRecord.fab;
        if (this.lmcFlow.indexOf(operation) !== -1) {
            this.table = new LMCCheckOpsModel();
        } else if ( this.drcFlow.indexOf(operation) !== -1 ) {
            this.table = new DrcCheckOpsModel();
        } else if ( this.validatorFlow.indexOf(operation) !== -1 ) {
            this.table = new ValidatorCheckOpsModel();
        } else {
            this.table = new OrcCheckOpsModel();
        }
        this.columnDefs = this.table.columnDefs;
    }

    public getTableColumn() {
        return this.columnDefs;
    }

}

export { CheckTableModel };
