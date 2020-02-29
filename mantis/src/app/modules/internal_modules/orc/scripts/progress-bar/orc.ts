import { ProgressBarBase } from './base';

export class OrcPtrfF1ProgressBar extends ProgressBarBase {
    public registeredStages: number[] = [10, 50, 60, 70, 200, 210, 220]
    public closeStage: number[] = [90]
    public sourceStages: any[] = [];
    /*
        (10, 'new'),
        (12, 'cancelled'),
        (50, 'assigned'),
        (60, 'disposing'),
        (70, 'patching'),
        (90, 'closed'),
        (200, 'escalatedSOA'),
        (210, 'escalatedFST'),
        (220, 'escalatedPOA'),
        (230, 'reescalated'),
        (240, 'submitting'),
        (250, 'submitted'),
    */
    
    filterProgressBarStages(stages){
        let closeCache = {}
        for(let stage of stages){
            const stage_id = stage.id
            if(this.registeredStages.indexOf(stage_id) > -1){
                this.sourceStages.push(stage);
            }
            if(this.closeStage.indexOf(stage_id) > -1){
                closeCache = stage;
            }
        }
        this.sourceStages.push(closeCache)
        return this.sourceStages;
    }
    
}