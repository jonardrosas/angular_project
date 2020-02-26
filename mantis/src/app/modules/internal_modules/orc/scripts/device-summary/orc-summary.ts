import { CommonSummaryField , DetailSummaryBase} from './base-summary';


export class OrcDeviceSummary extends DetailSummaryBase {}

export class PtrfOrcDeviceSummary extends OrcDeviceSummary {

    public cadInfoTable = {
        fields: [
            this.operation,
            this.techtype,
            this.runHistory,
            this.gtoReviewStatus,
            this.dateGen,
            this.maskset,
            this.primeDieName,
            this.processId,
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

}


export class RitOrcDeviceSummary extends OrcDeviceSummary {

    public cadInfoTable = {
         fields: [
            this.operation,
            this.techtype,
            this.ritName,
            this.runHistory,
            this.gtoReviewStatus,
            this.dateGen,
            this.maskset,
            this.primeDieName,
            this.processId,
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

}

export class FTRFOrcDeviceSummary extends OrcDeviceSummary {

    public cadInfoTable = {
        fields: [
            this.operation,
            this.ftrfFormName,
            this.ftrfFormStatus,
            this.techtype,
            this.runHistory,
            this.dateGen,
            this.maskset,
            this.primeDieName,
            this.layer,
            this.customer,
            this.fab,
            this.productName,
            this.productNameRevision,
            this.ftrfSecureDevice,
            this.eccnColor,
            this.ftrfProcessTech,
            this.ftrfProcessDevStatus,
            this.ftrfServiceRequest,
            this.rtm,
            this.fnd,        
            this.genericInfo,        
        ]
    }

}



