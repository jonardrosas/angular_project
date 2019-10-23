import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';

import { MantisRecordService } from './../../services';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager, DispostionParameter } from './../../scripts';
// import { DeviceSummaryComponent } from './../device-summary/device-summary.component';
import { ButtonCollapse } from './../../util/';

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
    public coloredTable: string = "white";
    public statusList: string;
    
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
        // console.log(this.tableInstance);
        console.log(this.tableItem);
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
            if(this.currentStage == progressBarElem.label){
                progressBarElem.truth = true;
                progressBarElem.bold = true;
                this.statusList = progressBarElem.status;
                break;
            }
        }
    }
    
    getMantisStatus(){
        
        return 1;
    }
}