import { DetailSummaryBase } from './base-summary';


export class LMCDeviceSummary extends DetailSummaryBase {
    additionalInfoTable = {
        fields: [
            [
                this.topCell,
                this.tapeoutLayers,
                this.topupLayers,
                this.ptrfStatus,
            ],
        ]
    }

    constructor(dispoParams) {
        super(dispoParams);
    }
}
