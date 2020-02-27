import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Subscription } from 'rxjs';
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

export class ProgressBarComponent implements OnInit, OnDestroy {
    public StageModel;
    public stages;
    public mantisRecord;
    public currentStage: number;
    public defaultColor: string = "ivory";
    public passedColor: string = "lightgray";
    public currentColor: string;
    private mantisRecordSubscription: Subscription;
    private stageSubscription: Subscription;
    
    constructor(
        private mantisRecordService: MantisRecordService,
        private dispoMangerService: DispoMangerService,
        private store: Store<any>,
    ) {
        // super();
    }

    ngOnDestroy(){
        this.mantisRecordSubscription.unsubscribe()
        this.stageSubscription.unsubscribe()
    }
    
    ngOnInit(){
        this.getStages()
        this.mantisRecordSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector))
        .subscribe(
            (data) => {
                if(data.id){
                    this.currentStage = data.status_code;
                }
            }
        )        
    }
    

    filterStages(data){    
        return  this.dispoMangerService.dispoManagerInstance.filterJobProgressBar(data)
    }


    getStages(){
        this.stageSubscription = this.store.pipe(select(orcModuleStore.getMantisStagesStateSelector))
        .subscribe(
            (data) => {
                this.stages = this.filterStages(data);
            }
        )
    }
    
    setCurrentColor(stage){
        if(stage.id  > this.currentStage){
            return '#e2e2e2';
        }else{
            return stage.color;
        }
    }

    setCurrentClass(stage){
        if(stage.id == this.currentStage){
            return 'panel-shadow';
        }else if(stage.id < this.currentStage){
            return '';
        }else{
            return 'opacity-5';
        }

    }    
}