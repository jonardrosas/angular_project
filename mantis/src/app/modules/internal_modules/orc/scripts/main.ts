import {
    OrcCheckOpsModel,
    LMCCheckOpsModel,
    DrcCheckOpsModel,
    ValidatorCheckOpsModel
} from './checks/columns.model';

import { OrcRecordModel } from '../models';
import { CheckTableModel } from './../scripts/checks/table.model';


interface JobReportInterface {
    getJobActionButtons(): void;
    getSummaryColumns(): void;
    getCheckActionButtons(): void;
    getChecksTable(): void;
}


class OrcModuleBaseClass implements JobReportInterface {
    public operation: string;
    public fab: string;
    public orcOps = ['ORC', 'OPCV', 'ORC_DEV', 'decomp', 'target', 'pm', 'opc', 'matchXOR', 'opc_orc', 'MRC'];
    public lmcOps = ['LMC', 'TFLEXLMC_WRAPPER'];
    public pgrOps = ['pgrc'];
    public validatorOps = ['Validator'];
    public drcOps = ['DRC', 'PDKDRC', 'FABDRC', 'PFDRC', 'ENGDRC', 'FrameDRC', 'POSTDSDRC', 'FAB_DRC'];
    public dfmOps = ['DFM'];

    constructor(public orcRecord: OrcRecordModel) {
        this.operation =  this.orcRecord.operation;
        this.fab =  this.orcRecord.fab;
    }

    getJobActionButtons() {
        return 1;
    }

    getSummaryColumns() {
        return 1;
    }

    getCheckActionButtons() {
        return 1;
    }

    getChecksTable() {
        return new CheckTableModel(this.orcRecord);
    }


}

export class OrcDetailMain extends OrcModuleBaseClass {

    constructor(public orcRecord: OrcRecordModel) {
        super(orcRecord);
    }
}





