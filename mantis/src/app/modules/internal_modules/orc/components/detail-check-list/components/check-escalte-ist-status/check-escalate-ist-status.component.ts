import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MantisRecordModel, GroupProfileInterface } from '../../../../models';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { OrcRecordService, DispoMangerService } from './../../../../services/';
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
    @Input() dispoManagerInstance;
    public escalateIstForm;
    public istGroups$: Observable<GroupProfileInterface[]>;
    public alerts: NgAlertInterface[] = [];
    public showSelectedChecks;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        public orcRecordService: OrcRecordService,
        private dispoService: DispoMangerService,
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
        this.store.dispatch(this.dispoManagerInstance.storeManagerIns.iSTGroupDispatchAction({status: 'iST', fab: this.mantisRecord.orc_record.orc_ext.fab}));
        this.istGroups$ = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.iSTGroupSelector))
    }    

    formData(){
        let data: any  = {};
        data.operation = this.mantisRecord.operation;
        data.comments = this.escalateIstForm.value.comments;
        data.group_id = this.escalateIstForm.value.group_id;
        data.newStat = 'iST';
        data.record_id = this.mantisRecord.orc_record.id;
        data.checks_list = [];
        for(let key in this.selectedData){
            data.checks_list.push(
                {oldstatus: this.selectedData[key].status, id: this.selectedData[key].id}
            )
        }
        return data;
    }


    onSubmit() {
        this.clearAlerts();
        if (this.escalateIstForm.status === 'INVALID') {
            if (this.escalateIstForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.escalateIstForm.controls.group_id.errors});
            }
        } else {
            let data = this.formData();
            this.orcRecordService.changeStatus(data).subscribe(
                (data) => {
                    if(data.status == 'success'){
                        this.alerts.push({type: 'success', message: data.msg});
                        setTimeout(
                            (data) => {
                                this.activeModal.close(data)
                            }, 2000
                        )
                    }else{
                        this.alerts.push({type: 'danger', message: data.msg});
                    }
                }
            )
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }
}
