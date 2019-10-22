import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MantisRecordModel, GroupProfileInterface } from '../../../../models';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-check-escalate-ist',
    templateUrl: './check-escalate-ist-status.component.html',
    styleUrls: ['./check-escalate-ist-status.component.css']
})

export class CheckEscalateIstComponent implements OnInit {
    @Input() selectedData;
    @Input() mantisRecord: MantisRecordModel;
    public escalateIstForm;
    public istGroups$: Observable<GroupProfileInterface[]>;
    public alerts: NgAlertInterface[] = [];
    public showSelectedChecks;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
    ) {}

    ngOnInit() {
        const paramsIns = {
            mantisRecord: this.mantisRecord
        }
        this.escalateIstForm = new FormGroup({
            group_id: new FormControl('', Validators.required),
            comments: new FormControl(''),
        });
        this.getiSTGroups()
    }

    clearAlerts() {
        this.alerts = [];
    }

    getiSTGroups() {
        this.istGroups$ = this.store.pipe(select(orcModuleStore.getIstSupportTeamGroupSelector))
    }    

    onSubmit() {
        this.clearAlerts();
        if (this.escalateIstForm.status === 'INVALID') {
            if (this.escalateIstForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.escalateIstForm.controls.group_id.errors});
            }
        } else {
            this.alerts.push({type: 'success', message: 'Successfully updated(Not hitting Database yet).' });
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }
}
