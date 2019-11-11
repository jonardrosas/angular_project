import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { MantisDispositionManager } from '../../../scripts';

@Component({
  selector: 'app-detail-job-assign-to',
  templateUrl: './detail-job-assign-to.component.html',
  styleUrls: ['./detail-job-assign-to.component.css']
})
export class DetailJobAssignToComponent implements OnInit {
    public jobAssignForm;
    public Editor = ClassicEditor;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Job Assignment";
    public testUserList = ["tsudarso", "jonard", "queksf", "shchiang", "chsong"];

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) { }

    ngOnInit() {
        this.jobAssignForm = new FormGroup({
            assigned_to: new FormControl('', Validators.required),
            comment: new FormControl('')
        });
    }
    
    clearAlerts() {
        this.alerts = [];
    }
    
    onSubmit(){
        this.clearAlerts();
        if (this.jobAssignForm.status === 'INVALID') {
            if (this.jobAssignForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.jobAssignForm.controls.status.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }
    
    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

}