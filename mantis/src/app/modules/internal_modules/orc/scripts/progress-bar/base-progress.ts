import { MantisStageStatusModel } from './../common/stage';

interface ProgressBarInterface {
    progressBar: any;
    setProgressBar(): void;
}

export class ProgressBarModel implements ProgressBarInterface {
    progressBar = MantisStageStatusModel;
    public stages: string[] = ['new', 'assigned', 'disposing', 'closed'];
    temporary: any[] = [];
    public index: number = 0;
    
    constructor() {
        this.setProgressBar();
    }
    
    setProgressBar(){
        for(let stage of this.stages){
            for(let element of this.progressBar){
                if(element.label == stage){
                    this.temporary.splice(this.index, 0, element);
                    this.index = this.index + 1;
                }
            }
        }
        this.progressBar = this.temporary;
    }
    
    getProgressBar() {
        return this.progressBar;
    }
}