import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MantisRecordModel } from '../../../../models';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-check-escalate-ist',
    templateUrl: './check-escalate-ist-status.component.html',
    styleUrls: ['./check-escalate-ist-status.component.css']
})

export class CheckEscalateIstComponent implements OnInit {
    @Input() selectedData;
    @Input() mantisRecord: MantisRecordModel;
    public statusInstance;
    public statusGroup;
    public escalateIstForm;
    public alerts: NgAlertInterface[] = [];

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit() {
        const paramsIns = {
            mantisRecord: this.mantisRecord
        }
        // this.statusInstance = new MantisDispositionManager(paramsIns);
        // this.statusGroup = this.statusInstance.statusGroup;
        this.escalateIstForm = new FormGroup({
            status: new FormControl('', Validators.required),
            description: new FormControl(''),
        });
    }

    clearAlerts() {
        this.alerts = [];
    }

    onSubmit() {
        this.clearAlerts();
        if (this.escalateIstForm.status === 'INVALID') {
            if (this.escalateIstForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.escalateIstForm.controls.status.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }
}
