import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MantisRecordModel } from './../../../../models';
import { NgbActiveModal } from './../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../../core/models';
import { CheckchangeStatusMod } from './../../../../scripts/check-status/main';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-check-change-status',
    templateUrl: './check-change-status.component.html',
    styleUrls: ['./check-change-status.component.css']
})

export class CheckChangeStatusComponent implements OnInit {
    @Input() selectedData;
    @Input() mantisRecord: MantisRecordModel;
    public statusInstance;
    public statusGroup;
    public changeStatusForm;
    public alerts: NgAlertInterface[] = [];
    public showSelectedChecks = false;

    constructor(public activeModal: NgbActiveModal) {
    }

    ngOnInit() {
        this.statusInstance = new CheckchangeStatusMod(this.mantisRecord);
        this.statusGroup = this.statusInstance.statusGroup;
        this.changeStatusForm = new FormGroup({
            status: new FormControl('', Validators.required),
            description: new FormControl(''),
        });
    }

    clearAlerts() {
        this.alerts = [];
    }

    showChecks() {
        this.showSelectedChecks = true;
    }

    onSubmit() {
        this.clearAlerts();
        if (this.changeStatusForm.status === 'INVALID') {
            if (this.changeStatusForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.changeStatusForm.controls.status.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }

}
