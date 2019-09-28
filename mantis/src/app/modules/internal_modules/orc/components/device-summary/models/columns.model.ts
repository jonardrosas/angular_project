import { DetailSummaryBaseColumns } from './base';


class OrcDeviceSummaryColumns extends DetailSummaryBaseColumns {
    constructor() {
        super();
        this.setRows();
    }

    setRows() {
        this.row1 = [
            this.orcRecordId,
            this.mantisId,
            this.pdbStatus,
            this.dispositionMethod,
            this.fab,
            this.aggregateStatus,
        ];

        this.row2 = [
            this.techtype,
            this.jobId,
            this.runHistory,
            this.gtoReviewStatus,
            this.dateGen,
            this.reviewer,
        ];

        this.row3 = [
            this.maskset,
            this.primeDieName,
            this.ptrfName,
            this.layer,
            this.processId,
            this.operation,
        ];
    }

    getColumns() {
        return [
            this.row1,
            this.row2,
            this.row3,
        ];
    }
}

export { OrcDeviceSummaryColumns };
