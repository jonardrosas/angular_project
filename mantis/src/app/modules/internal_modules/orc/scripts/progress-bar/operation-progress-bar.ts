import { ProgressBarModel } from './base-progress';
import { FAB } from '../common/fab';

export class OrcProgressBarTable extends ProgressBarModel {
    private stagesORC: string[] = ['new', 'assigned', 'disposing', 'patching', 'closed'];
    temporary: any[] = [];
    public index: number = 0;
    
    constructor (private dispoParams) {
        super();
        // this.getProgressBar();
    }
    
    getProgressBar() {
        for(let stage of this.stages){
            for(let element of this.progressBar){
                if(element.label == stage){
                    this.temporary.splice(this.index, 0, element);
                    this.index = this.index + 1;
                }
            }
        }
        this.progressBar = this.temporary;
        return this.progressBar;
    }
}

export class DrcProgressBarTable extends ProgressBarModel {
    private stagesDRC: string[] = ['new', 'assigned', 'disposing', 'escalatedSOA', 'escalatedFST', 'submitting', 'submitted', 'closed'];
    temporary: any[] = [];
    public index: number = 0;
    
    constructor (private dispoParams) {
        super();
        // this.getProgressBar();
    }
    
    getProgressBar() {
        for(let stage of this.stages){
            for(let element of this.progressBar){
                if(element.label == stage){
                    this.temporary.splice(this.index, 0, element);
                    this.index = this.index + 1;
                }
            }
        }
        return this.progressBar;
    }
}

export class DfmProgressBarTable extends ProgressBarModel {
    private stagesDFM: string[] = ['new', 'closed'];
    temporary: any[] = [];
    public index: number = 0;
    
    constructor (private dispoParams) {
        super();
        // this.getProgressBar();
    }
    
    getProgressBar() {
        for(let stage of this.stages){
            for(let element of this.progressBar){
                if(element.label == stage){
                    this.temporary.splice(this.index, 0, element);
                    this.index = this.index + 1;
                }
            }
        }
        this.progressBar = this.temporary;
        return this.progressBar;
    }
}