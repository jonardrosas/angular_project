import { MantisRecordModel } from '../../../models';
import { OrcDeviceSummaryColumns } from './columns.model';

class DeviceSummaryTable {
    public table: any;
    public columns: any;
    orcFlow = ['ORC', 'OPCV', 'ORC_DEV', 'decomp', 'target', 'pm', 'opc', 'matchXOR', 'opc_orc', 'MRC'];
    lmcFlow = ['LMC', 'TFLEXLMC_WRAPPER'];
    pgrcFlow = ['pgrc'];
    validatorFlow = ['Validator'];
    drcFlow = ['DRC', 'PDKDRC', 'FABDRC', 'PFDRC', 'ENGDRC', 'FrameDRC', 'POSTDSDRC', 'FAB_DRC'];
    dfmFlow = ['DFM'];

    constructor(private mantisRecord: MantisRecordModel) {
        const operation = this.mantisRecord.operation;
        if (this.lmcFlow.indexOf(operation) !== -1) {
            this.table = new OrcDeviceSummaryColumns();
        } else if ( this.drcFlow.indexOf(operation) !== -1 ) {
            this.table = new OrcDeviceSummaryColumns();
        } else if ( this.validatorFlow.indexOf(operation) !== -1 ) {
            this.table = new OrcDeviceSummaryColumns();
        } else {
            this.table = new OrcDeviceSummaryColumns();
        }
        this.columns = this.table.getColumns();
    }

    getColumn() {
        return this.columns;
    }

}

export { DeviceSummaryTable };
