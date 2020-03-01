import { Component, OnInit, Input, Output, OnDestroy, EventEmitter } from '@angular/core';
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
import * as orcModuleStore from './../../../store';

@Component({
  selector: 'app-detail-job-change-status',
  templateUrl: './detail-job-change-status.component.html',
  styleUrls: ['./detail-job-change-status.component.css']
})

export class DetailJobChangeStatusComponent implements OnInit, OnDestroy {
    @Input() filterStages;
    @Input() filterResolution;
    @Output() reload = new EventEmitter()
    public mantisRecord;
    public container;
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
        private store: Store<any>,
        public mantisRecordService: MantisRecordService
    ) { }
    
    ngOnInit () {

        this.ResolutionModel = new MantisResolution()


        this.jobChangeStatusForm = new FormGroup ({
            stage: new FormControl('', Validators.required),
            status: new FormControl({value: ''}, Validators.required),
            comments: new FormControl('', Validators.required),
            // groups: new FormControl('test'),
            mantis_ids: new FormControl(this.container.mantisId)
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
    
    getStages(){
        this.stageSubscription = this.store.pipe(select(orcModuleStore.getMantisStagesStateSelector))
        .subscribe(
            (data) => {
                this.stages = this.filterStages(data);
            }
        )
    }    
    
    getResolutions() {
        const stage_id = this.jobChangeStatusForm.controls.stage.value.id;
        if(stage_id){
            const resolutions = this.ResolutionModel.objects.filter({stage: stage_id})
            this.resolutionSubscription = resolutions.subscribe(
                (data) => {
                    this.resolutions = this.filterResolution(data)
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
                    setTimeout(
                        ()=>this.activeModal.close()
                    )                  
                }else{
                    if(data.msg.common){
                        this.alerts.push({message: data.msg.common, type: 'danger'})
                    }                    
                    if( data.msg[this.mantisRecord.id]){
                        this.alerts.push({message: data.msg[this.mantisRecord.id], type: 'danger'})
                    }
                }
            }
        )
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}
