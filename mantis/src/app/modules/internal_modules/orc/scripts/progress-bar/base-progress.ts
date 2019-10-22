import { MantisStageStatusModel } from './../common/stage';

interface ProgressBarInterface {
    progressBar: any;
    setProgressBar(): void;
}

export class ProgressBarModel implements ProgressBarInterface {
    progressBar = MantisStageStatusModel;
    
    constructor() {
        this.setProgressBar();
    }
    
    setProgressBar(){
        this.progressBar;
    }
    
    getProgressBar() {
        return this.progressBar;
    }
}