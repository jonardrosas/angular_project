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
    @Input() validation;
    @Input() dispoManagerInstance;
    @Input() mantisRecord: MantisRecordModel;
    public statusGroup;
    public statusInstance;
    public changeStatusForm;
    public alerts: NgAlertInterface[] = [];
    public showSelectedChecks = false ;
    

    constructor(
        public activeModal: NgbActiveModal,
        public orcRecordService: OrcRecordService,
    ) {}

    ngOnInit() {
        this.changeStatusForm = new FormGroup({
            status: new FormControl('', Validators.required),
            description: new FormControl('', Validators.required),
        });
        this.statusGroup = this.dispoManagerInstance.changeStatusOption;
    }

    clearAlerts() {
        this.alerts = [];
    }

    showChecks() {
        this.showSelectedChecks = true;
    }

    getFinalCheckAfterValidation(validatedChecks){
        let checksList = [];
        for(let key in validatedChecks){
            checksList.push(
                {oldstatus: validatedChecks[key].status, id: validatedChecks[key].id}
            )
        }        
        return checksList;
    }

    formData(){
        let data: any  = {};
        data.operation = this.mantisRecord.operation;
        data.comments = this.changeStatusForm.value.description;
        data.newStat = this.changeStatusForm.value.status;
        data.record_id = this.mantisRecord.orc_record.id;
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
            const valildationData = this.validation(this.selectedData, data)
            if(valildationData.cleanChecks.length == 0){
                for (let k in valildationData.errors){
                    this.alerts.push({type: 'danger', message: valildationData.errors[k]});
                }
            }else{
                data.checks_list = this.getFinalCheckAfterValidation(valildationData.cleanChecks)
                this.orcRecordService.changeStatus(data).subscribe(
                    (data) => {
                        if(data.status == 'success'){
                            this.alerts.push({type: 'success', message: data.msg});
                            setTimeout(
                                (data) => {
                                    this.activeModal.close(data)
                                }
                            )
                        }else{
                            this.alerts.push({type: 'danger', message: data.msg});
                        }
                    }
                )
            }
        }
    }

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1)
    }
}
