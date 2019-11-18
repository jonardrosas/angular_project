import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { checkChangeStatusList } from './../../../scripts/common/status';
import { MantisStageStatusModel } from './../../../scripts/common/stage';
import { URLS } from './../../../../../../configs/app-urls';
import { HttpClient } from '@angular/common/http';
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
    public nextStatus: string;
    
    constructor (
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        private http: HttpClient,
    ) { }
    
    ngOnInit () {
        this.jobChangeStatusForm = new FormGroup ({
            stage: new FormControl('', Validators.required),
            status: new FormControl({value: '', disabled: true}, Validators.required),
            comments: new FormControl('', Validators.required),
            groups: new FormControl('test'),
            mantis_ids: new FormControl('test')
        })
        this.getStageGroup();
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
        this.statusGroup = [''];
        for (let element of checkChangeStatusList){
            if (element.group == this.nextStageGroup){
                this.statusGroup.push(element.label);
            }
        }
        this.jobChangeStatusForm.get('status').value = '';
    }
    
    resetStatus() {
        this.jobChangeStatusForm.controls.status.disable();
        this.activateStatusList();
    }
    
    activateStatusList() {
        this.jobChangeStatusForm.controls.status.enable();
        this.nextStage = this.jobChangeStatusForm.controls.stage.value;
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
        
            let formData = new FormData();
            formData.append("stage", this.jobChangeStatusForm.get('stage').value);
            formData.append("status", this.jobChangeStatusForm.get('status').value);
            formData.append("comments", this.jobChangeStatusForm.get('comments').value);
            formData.append("groups", this.jobChangeStatusForm.get('groups').value);
            formData.append("mantis_ids", this.jobChangeStatusForm.get('mantis_ids').value);
            
            this.http.post(URLS.DRF_ORC_JOB_DISPOSE_URL, formData).subscribe(
                (response) => {
                    console.log(response);
                    this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
                },
                (error) => console.log(error)
            )
            // this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }
}
