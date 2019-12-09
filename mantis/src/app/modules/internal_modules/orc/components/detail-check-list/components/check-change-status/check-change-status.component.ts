import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { MantisRecordModel } from './../../../../models';
import { NgbActiveModal } from './../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../../core/models';
import { OrcRecordService } from './../../../../services/';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-check-change-status',
    templateUrl: './check-change-status.component.html',
    styleUrls: ['./check-change-status.component.css']
})

export class CheckChangeStatusComponent implements OnInit {
    @Input() selectedData;
    @Input() dispoManagerInstance;
    @Input() mantisRecord: MantisRecordModel;
    public statusGroup;
    public statusInstance;
    public changeStatusForm;
    public alerts: NgAlertInterface[] = [];
    public showSelectedChecks = false ;
    

    constructor(
        public activeModal: NgbActiveModal,
        public orcRecordService: OrcRecordService
    ) {}

    ngOnInit() {
        this.changeStatusForm = new FormGroup({
            status: new FormControl('', Validators.required),
            description: new FormControl(''),
        });
        this.statusGroup = this.dispoManagerInstance.dispositionInstance.changeStatusOptions;
    }

    clearAlerts() {
        this.alerts = [];
    }

    showChecks() {
        this.showSelectedChecks = true;
    }

    formData(){
        let data: any  = {};
        data.operation = this.mantisRecord.operation;
        data.comments = this.changeStatusForm.value.description;
        data.newStat = this.changeStatusForm.value.status;
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
        if (this.changeStatusForm.status === 'INVALID') {
            if (this.changeStatusForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.changeStatusForm.controls.status.errors});
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
