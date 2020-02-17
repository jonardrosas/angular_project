import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { MantisStageStatusModel } from './../../../scripts/common/stage';
import { URLS } from './../../../../../../configs/app-urls';
import { HttpClient } from '@angular/common/http';
import { MantisStage, MantisResolution } from './../../../models';
import { MantisRecordService } from './../../../services';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-detail-job-change-status',
  templateUrl: './detail-job-change-status.component.html',
  styleUrls: ['./detail-job-change-status.component.css']
})

export class DetailJobChangeStatusComponent implements OnInit, OnDestroy {
    public mantisRecord;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "JOB LEVEL DISPOSITION";
    public jobChangeStatusForm;
    public StageModel: MantisStage;
    public ResolutionModel: MantisResolution;
    public stages: any[] = [];
    public resolutions: any[] = [];
    public stageSubscription: Subscription;
    public resolutionSubscription: Subscription;

    
    constructor (
        public activeModal: NgbActiveModal,
        public mantisRecordService: MantisRecordService
    ) { }
    
    ngOnInit () {

        this.StageModel = new MantisStage()
        this.ResolutionModel = new MantisResolution()


        this.jobChangeStatusForm = new FormGroup ({
            stage: new FormControl('', Validators.required),
            status: new FormControl({value: ''}, Validators.required),
            comments: new FormControl('', Validators.required),
            // groups: new FormControl('test'),
            mantis_ids: new FormControl(this.mantisRecord.id)
        })
        this.getStages();
        // console.log(this.mantisRecord);
    }

    ngOnDestroy(){
        this.stageSubscription.unsubscribe()
        this.resolutionSubscription.unsubscribe()

    }
    
    clearAlerts() {
        this.alerts = [];
    }
    
    getStages() {
        const stages = this.StageModel.objects.all({})
        this.stageSubscription = stages.subscribe(
            (data) => {
                this.stages = data.results;
            }
        )
    }
    
    getResolutions() {
        const stage_id = this.jobChangeStatusForm.controls.stage.value.id;
        if(stage_id){
            const resolutions = this.ResolutionModel.objects.filter({stage: stage_id})
            this.resolutionSubscription = resolutions.subscribe(
                (data) => {
                    this.resolutions = data;
                }
            )        
        }
    }
    
    resetStatus() {
        this.jobChangeStatusForm.controls.status.disable();
    }
    
    onSubmit () {
        const data = {}
        data['mantis_ids'] = [this.mantisRecord.id]
        data['stage'] = this.jobChangeStatusForm.controls.stage.value.name;
        data['status'] = this.jobChangeStatusForm.controls.status.value;
        data['comments']  = this.jobChangeStatusForm.controls.comments.value;
        this.mantisRecordService.changeJobStatus(data).subscribe(
            (data) => {
                if(data.status == 'success'){
                    this.alerts.push({message: data.msg[this.mantisRecord.id], type: 'success'})
                }else{
                    this.alerts.push({message: data.msg[this.mantisRecord.id], type: 'danger'})
                }
            }
        )
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}
