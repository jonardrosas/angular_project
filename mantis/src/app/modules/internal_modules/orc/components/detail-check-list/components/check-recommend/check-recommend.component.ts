import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { GroupProfileInterface } from '../../../../models';
import { FormGroup, FormControl } from '@angular/forms';
import * as orcModuleStore from './../../../../store';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { OrcRecordService, DispoMangerService } from './../../../../services/';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-check-recommend',
  templateUrl: './check-recommend.component.html',
  styleUrls: ['./check-recommend.component.css']
})

export class CheckRecommendComponent implements OnInit {
    @Input() selectedData;
    public mantisRecord;
    public dispoManagerInstance;
    public recommendForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Check Recommend";
    public Editor = ClassicEditor;
    public recommendations: string;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        public orcRecordService: OrcRecordService,
        private dispoService: DispoMangerService,
    ) {}

    ngOnInit() {
        this.recommendForm = new FormGroup({
            status: new FormControl('', Validators.required),
            comments: new FormControl('')
        });
        this.dispoManagerInstance = this.dispoService.dispoManagerInstance;
        this.mantisRecord = this.dispoService.dispoManagerInstance.dispoParams.mantisRecord;
        this.recommendations = this.dispoService.dispoManagerInstance.recommendationOptions;
    }


    formData(){
        let data: any  = {};
        data.comments = this.recommendForm.value.comments;
        data.final_recommendation= this.recommendForm.value.status;
        data.newStat= 'fST'
        data.record_id = this.mantisRecord.orc_record.id;
        data.data = [];
        for(let key in this.selectedData){
            data.data.push(
                {
                    oldstatus: this.selectedData[key].status,
                    id: this.selectedData[key].id,
                    status: this.selectedData[key].status
                }
            )
        }
        return data;
    }    

    onSubmit() {
        if (this.recommendForm.status === 'INVALID') {
            if (this.recommendForm.controls.status.invalid) {
                this.alerts.push({type: 'danger', message: this.recommendForm.controls.status.errors});
            }
        } else {
            let data = this.formData();
            this.orcRecordService.checkRecommend(data).subscribe(
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

