import { CommonSummaryField , DetailSummaryBase} from './base-summary';


export class PtrfOrcDeviceSummary extends CommonSummaryField {
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
        this.layer,
        this.processDevStatus,
        this.customer,
        this.rtm,
        this.fnd,
        this.ptrfStatus,
        this.ptrfcrmDID,
        this.techgeo,
        this.pidNumber,
        this.processTechnology,
        this.genericInfo,
        this.ptrfMaskLayers,
        this.ptrfTopUpLayers,
    ]
}


export class RitOrcDeviceSummary extends CommonSummaryField{
    public fields = [
        this.techtype,
        this.runHistory,
        this.gtoReviewStatus,
        this.dateGen,
        this.maskset,
        this.primeDieName,
        this.processId,
        this.operation,
        this.ritName,
        this.keyword,
        this.topCell,
        this.plmTechtype,
        this.layer,
        this.customer,
        this.rtm,
        this.fnd,        
        this.genericInfo,
    ]
}


export class OrcDeviceSummary extends DetailSummaryBase {
    private cadFieldsInstance;

    constructor(dispoParams) {
        super(dispoParams);
        if (this.dispoParams.mantisRecord.ptrf.startsWith("PTRF")){
            this.cadFieldsInstance = new PtrfOrcDeviceSummary()
        }else if(this.dispoParams.mantisRecord.ptrf.startsWith("RIT")){
            this.cadFieldsInstance = new RitOrcDeviceSummary()
        }

        if (this.cadFieldsInstance){
            this.cadInfoTable.fields = this.cadFieldsInstance.fields;
        }
    }

}

