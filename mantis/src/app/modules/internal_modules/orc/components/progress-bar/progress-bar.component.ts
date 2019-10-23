import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';

import { MantisRecordService } from './../../services';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager, DispostionParameter } from './../../scripts';
// import { DeviceSummaryComponent } from './../device-summary/device-summary.component';
import { ButtonCollapse } from '../../scripts/common/add-jobreport-section';

@Component({
    selector: 'progress-bar',
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.css']
})

export class ProgressBarComponent extends ButtonCollapse implements OnInit {
    @Input() dispoManagerInstance: MantisDispositionManager;
    public tableInstance;
    public tableItem;
    public mantisRecord;
    public currentStage: string;
    public defaultColor: string = "ivory";
    public passedColor: string = "lightgray";
    public currentColor: string;
    
    constructor(
        private mantisRecordService: MantisRecordService,
        private store: Store<any>        
    ) {
        super();
    }
    
    ngOnInit(){
        this.getObject();
        this.tableInstance = this.dispoManagerInstance.getMantisStageProgressBars();
        this.getCurrentStage(this.mantisRecord.status);
        this.tableItem = this.tableInstance.progressBar;
        this.searchCurrentColor();
        this.setBackgroundColor();
        this.getColorList();
    }
    
    getCurrentStage(status){
        this.currentStage = status;
    }
    
    getObject() {
        this.mantisRecord = {
            ...this.dispoManagerInstance.dispoParams.mantisRecord,
        }        
    }
    
    getColorList() {
        for(let progressBarElem of this.tableItem){
            // this.currentColor = progressBarElem.bg_color;
            // progressBarElem.bg_color = this.defaultColor;
            // this.setBackgroundColor();
            if(this.currentStage == progressBarElem.label){
                progressBarElem.truth = true;
                progressBarElem.bold = true;
                progressBarElem.bg_color = this.currentColor;
                break;
            }
            else{
                progressBarElem.bg_color = this.passedColor;
                progressBarElem.passed = true;
            }
        }
    }
    
    searchCurrentColor(){
        for(let progressBarElem of this.tableItem){
            if(this.currentStage == progressBarElem.label){
                this.currentColor = progressBarElem.bg_color;
            }
        }
    }
    
    setBackgroundColor(){
        for(let progressBarElem of this.tableItem){
            progressBarElem.bg_color = this.defaultColor;
        }
    }
}