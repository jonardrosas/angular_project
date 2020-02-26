import { DetailSummaryBase } from './base-summary';
import { OrcDeviceSummary } from './orc-summary';


export class LMCDeviceSummary extends OrcDeviceSummary {
    directoriesTable = {
        fields: [
            this.tapeoutWorkdir,
            this.logfile,
            this.layoutPath,
            this.resultPath,
        ]
    };

}
