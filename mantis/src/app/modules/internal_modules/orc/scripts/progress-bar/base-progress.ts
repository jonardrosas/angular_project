import { MantisStageStatusModel } from './../common/stage';

interface ProgressBarInterface {
    progressBar;
    setProgressBar(): void;
}

export class ProgressBarModel implements ProgressBarInterface {
    progressBar: object = MantisStageStatusModel;
    
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