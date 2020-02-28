import { DetailSummaryBase } from './base-summary';
import { OrcDeviceSummary, RitOrcDeviceSummary } from './orc-summary';


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


export class LMCRitDeviceSummary extends RitOrcDeviceSummary {
    directoriesTable = {
        fields: [
            this.tapeoutWorkdir,
            this.logfile,
            this.layoutPath,
            this.resultPath,
        ]
    };

}

