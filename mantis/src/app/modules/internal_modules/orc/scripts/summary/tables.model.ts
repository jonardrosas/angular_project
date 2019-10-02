import { MantisRecordModel } from '../../../orc/models';
import { OrcModuleOperation } from './../common/operation.class';
import { OrcDeviceSummary } from './columns.model';


export class DeviceSummaryTable extends OrcModuleOperation {
    private table: any;
    public columns: any;

    constructor(private mantisRecord: MantisRecordModel) {
        super();
        const operation = this.mantisRecord.operation;
        const fab = this.mantisRecord.fab;
        if (this.lmcOperation.indexOf(operation) !== -1) {
            this.table = new  OrcDeviceSummary(fab);
        } else if (this.drcOperation.indexOf(operation) !== -1 ) {
            this.table = new OrcDeviceSummary(fab);
        } else if ( this.validatorOperation.indexOf(operation) !== -1 ) {
            this.table = new OrcDeviceSummary(fab);
        } else {
            this.table = new OrcDeviceSummary(fab);
        }
    }

    getTables() {
        return {
            headTable: this.table.headTable,
            mainTable: this.table.mainTable,
            directoriesTable: this.table.directoriesTable,
        };
    }

}
