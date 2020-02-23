import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';

import { MantisRecordService, DispoMangerService } from './../../services';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager, DispostionParameter } from './../../scripts';
import { MantisStage, MantisResolution } from './../../models';

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent implements OnInit {
    public StageModel;
    public stages;
    public mantisRecord;
    public currentStage: number;
    public defaultColor: string = "ivory";
    public passedColor: string = "lightgray";
    public currentColor: string;
    
    constructor(
        private mantisRecordService: MantisRecordService,
        private dispoMangerService: DispoMangerService,
    ) {
        // super();
    }
    
    ngOnInit(){
        this.StageModel = new MantisStage()
        this.getStages()
        this.currentStage = this.dispoMangerService.dispoManagerInstance.dispoParams.mantisRecord.status_code;
    }
    
    getCurrentStage(status){
    }

    filterStages(data){    
        return  this.dispoMangerService.dispoManagerInstance.filterJobProgressBar(data)
    }


    getStages(){
        this.StageModel.objects.all({}).subscribe(
            (data) => {
                this.stages = this.filterStages(data.results);
            }
        )
    }
    
    setCurrentColor(stage){
        if(stage.id == this.currentStage){
            return '#ffc107';
        }else if(stage.id < this.currentStage){
            return 'lightgreen';
        }else{
            return '#e2e2e2';
        }
    }

    setCurrentClass(stage){
        if(stage.id == this.currentStage){
            return 'shadow border-3 border border-dark';
        }else{
            return 'border-1';
        }
    }    
}