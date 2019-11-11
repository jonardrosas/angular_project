import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { checkChangeStatusList } from './../../../scripts/common/status';
import { MantisStageStatusModel } from './../../../scripts/common/stage';

@Component({
  selector: 'app-detail-job-change-status',
  templateUrl: './detail-job-change-status.component.html',
  styleUrls: ['./detail-job-change-status.component.css']
})

export class DetailJobChangeStatusComponent implements OnInit {
    @Input() mantisID;
    @Input() mantisDispoManagerInstance;
    public stageGroup: any[] = [];
    public statusGroup: string[] = [];
    public jobChangeStatusForm;
    public Editor = ClassicEditor;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "JOB LEVEL DISPOSITION";
    public nextStage: string;
    public nextStageGroup;
    
    constructor (
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) { }
    
    ngOnInit () {
        this.jobChangeStatusForm = new FormGroup ({
            newStage: new FormControl('', Validators.required),
            newStatus: new FormControl({value: '', disabled: true}, Validators.required),
            comment: new FormControl('', Validators.required),
            groups: new FormControl(''),
            mantis_id: new FormControl('')
        })
        this.getStageGroup();
        console.log(this.mantisDispoManagerInstance);
    }
    
    clearAlerts() {
        this.alerts = [];
    }
    
    getStageGroup() {
        for (let element of MantisStageStatusModel){
            this.stageGroup.push({label: element.label, group: element.group});
        }
    }
    
    getStatusList() {
        this.statusGroup = [];
        for (let element of checkChangeStatusList){
            if (element.group == this.nextStageGroup){
                this.statusGroup.push(element.label);
            }
        }
    }
    
    activateStatusList() {
        this.jobChangeStatusForm.controls.newStatus.enable()
        this.nextStage = this.jobChangeStatusForm.controls.newStage.value;
        for (let element of MantisStageStatusModel){
            if (element.label == this.nextStage){
                this.nextStageGroup = element.group;
            }
        }
        this.getStatusList();
    }
    
    onSubmit () {
        this.clearAlerts();
        if (this.jobChangeStatusForm.status === 'INVALID') {
            if (this.jobChangeStatusForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.jobChangeStatusForm.controls.status.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}