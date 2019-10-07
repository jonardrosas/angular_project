import { DetailSummaryBase } from './base-summary';


export class OrcDeviceSummary extends DetailSummaryBase {
    constructor(fab: string = 'all') {
        super();
    }
    
}

export class DrcDeviceSummary extends DetailSummaryBase {
    constructor(fab: string = 'all') {
        super();
    }
    setMainTable() {
        this.mainTable = {
            fields: [
                [
                    this.maskset,
                    this.ptrfName,
                    this.primeDieName,
                    this.crmDid,
                    this.processId,
                    this.fab,
                    //this.techtype,
                    //this.jobId,
                    //this.runHistory,
                    //this.gtoReviewStatus,
                    //this.dateGen,
                    //this.reviewer,
                ],
                [
                    this.techtype,
                    //this.jobId,
                    this.runHistory,
                    this.gtoReviewStatus,
                    //this.maskset,
                    //this.primeDieName,
                    //this.ptrfName,
                    //this.layer,
                    //this.processId,
                    this.operation,
                    this.dateGen,
                    this.techfile,
                ],
                //[
                    //this.stage,
                    //this.status,
                    //this.dateGen,
                    //this.fab,
                    //this.techfile,
                    //this.reviewer,
                    //this.crmDid,
                //],
                [
                    //this.ptrfStatus,
                    this.customer,
                    this.topCell,
                    //this.fieldEngineer,
                    //this.tapeoutOption,
                    this.plmTechtype,
                    this.piyeApprover,
                    this.deptOwner,
                    this.processDevStatus,
                ],
                //[
                    //this.piyeApprover,
                    //this.processDevStatus,
                    //this.fnd,
                    //this.rtm,
                    //this.secureDevice,
                    //this.deptOwner,
                //],
                [ this.genericInfo ],
                [ this.tapeoutLayers ],
                [ this.topupLayers ],
                [ this.tapeoutWorkdir ],
                [ this.logfile ],
                [ this.layoutPath ],
                [ this.resultPath ],
                [ this.inlayoutMd5Sum ],
                [ this.inlayoutPath ],
            ]
        };
    }
}
