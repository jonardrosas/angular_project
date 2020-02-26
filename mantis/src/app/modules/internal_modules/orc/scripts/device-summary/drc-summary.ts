import { CommonSummaryField , DetailSummaryBase} from './base-summary';


export class DrcDeviceSummary extends DetailSummaryBase {}


export class PtrfDrcDeviceSummary extends DrcDeviceSummary {
    customer = { field: 'customer', headerName: 'Customer', col: 6};
    public cadInfoTable = {
        fields: [
            this.techtype,
            this.runHistory,
            this.gtoReviewStatus,
            this.dateGen,
            this.maskset,
            this.primeDieName,
            this.processId,
            this.operation,
            this.ptrfName,
            this.techfile,
            this.crmDid,
            this.topCell,
            this.plmTechtype,
            this.ptrfFieldEngineer,
            this.processDevStatus,
            this.ptrfStatus,
            this.ptrfcrmDID,
            this.ptrfdrcOption,
            this.customer,
            this.genericInfo,
            this.ptrfMaskLayers,
            this.ptrfTopUpLayers,
        ]
    }
}


export class PtsrDrcDeviceSummary extends DrcDeviceSummary {
    customer = { field: 'customer', headerName: 'Customer', col: 6};
    public cadInfoTable = {
        fields: [
            this.techtype,
            this.runHistory,
            this.gtoReviewStatus,
            this.dateGen,
            this.maskset,
            this.primeDieName,
            this.processId,
            this.operation,
            this.ptsrName,
            this.techfile,
            this.ptsrCrmDID,
            this.topCell,
            this.plmTechtype,
            this.ptsrServiceOptions,
            this.customer,
            this.genericInfo,
            this.ptsrMaskLayers,
        ]
    }
}
