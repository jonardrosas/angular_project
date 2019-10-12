import { DetailSummaryBase } from './base-summary';

export class DrcDeviceSummary extends DetailSummaryBase {
    additionalInfoTable = {
        fields: [
            [
                this.tapeoutLayers,
                this.topupLayers,
                this.tapeoutOption
            ],
        ]
    }

    constructor(dispoParams) {
        super(dispoParams);
    }
 
}
