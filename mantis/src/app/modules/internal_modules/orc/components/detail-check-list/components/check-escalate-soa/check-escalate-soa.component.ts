import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { GroupProfileInterface } from '../../../../models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Observable } from 'rxjs';
import { MantisRecordModel } from './../../../../models';
import { OrcRecordService } from './../../../../services/';


@Component({
  selector: 'app-check-escalate-soa',
  templateUrl: './check-escalate-soa.component.html',
  styleUrls: ['./check-escalate-soa.component.css']
})

export class CheckEscalateSoaComponent implements OnInit {
    @Input() selectedData;
    @Input() validation;
    @Input() dispoManagerInstance;
    @Input() mantisRecord: MantisRecordModel;    
    public escalateSoaGroupsForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Escalate to SOA Groups";
    public Editor = ClassicEditor;
    public soaGroups$: Observable<GroupProfileInterface[]>;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        private orcRecordService: OrcRecordService,
    ) {}

    ngOnInit() {
        this.getSOAGroups();
        this.escalateSoaGroupsForm = new FormGroup({
            soa_groups: new FormControl('', Validators.required),
            comments: new FormControl('')
        });
    }

    getSOAGroups() {
        this.soaGroups$ = this.store.pipe(select(orcModuleStore.getSOASupportTeamGroupSelector))
    }    

    clearAlerts() {
        this.alerts = [];
    }    

    formData(){
        let data: any  = {};
        data.operation = this.mantisRecord.operation;
        data.comments = this.escalateSoaGroupsForm.value.comments;
        data.newStat = 'SOA'
        data.record_id = this.mantisRecord.orc_record.id;
        data.soa_groups = this.escalateSoaGroupsForm.value.soa_groups;

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
        if (this.escalateSoaGroupsForm.status === 'INVALID') {
            if (this.escalateSoaGroupsForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.escalateSoaGroupsForm.controls.status.errors});
            }
        } else {
            let data = this.formData();
            debugger;
            const errors = this.validation(this.selectedData, data)
            if(errors.length > 0){
                for (let k in errors){
                    this.alerts.push({type: 'danger', message: errors[k]});
                }
            }else{
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
