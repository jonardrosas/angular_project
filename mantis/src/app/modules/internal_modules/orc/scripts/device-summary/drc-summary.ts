import { CommonSummaryField , DetailSummaryBase} from './base-summary';


export class PtrfDrcDeviceSummary extends CommonSummaryField {
    customer = { field: 'customer', headerName: 'Customer', col: 6};
    public fields =[
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


export class PtsrDrcDeviceSummary extends CommonSummaryField{
    customer = { field: 'customer', headerName: 'Customer', col: 6};
    public fields = [
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


// DRC is sub categorized as PTRF or PTSR 
export class DrcDeviceSummary extends DetailSummaryBase {
    private cadFieldsInstance;
    private fields;

    constructor(dispoParams) {
        super(dispoParams);
        if (this.dispoParams.mantisRecord.ptrf.startsWith("PTRF")){
            this.cadFieldsInstance = new PtrfDrcDeviceSummary()
        }else if(this.dispoParams.mantisRecord.ptrf.startsWith("PTSR")){
            this.cadFieldsInstance = new PtsrDrcDeviceSummary()
        }
        this.cadInfoTable.fields = this.cadFieldsInstance.fields;
    }
}

