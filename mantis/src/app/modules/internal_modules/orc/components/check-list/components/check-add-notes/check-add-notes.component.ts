import { Component, OnInit, Input } from '@angular/core';
import { Validators } from '@angular/forms';
import { NgbActiveModal } from '../../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from '../../../../../../../core/models';
import { FormGroup, FormControl } from '@angular/forms';
import { MantisRecordModel } from './../../../../models';
import * as orcModuleStore from './../../../../store';
import { OrcRecordService } from './../../../../services/';
import { Store, select } from '@ngrx/store';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-check-add-notes',
  templateUrl: './check-add-notes.component.html',
  styleUrls: ['./check-add-notes.component.css']
})
export class CheckAddNotesComponent implements OnInit {
    @Input() selectedData;
    @Input() dispoManagerInstance;
    @Input() mantisRecord: MantisRecordModel;    
    public addNotesForm;
    public alerts: NgAlertInterface[] = [];
    public heading: string = "Add Notes";
    public Editor = ClassicEditor;

    constructor(
        public activeModal: NgbActiveModal,
        private store: Store<any>,
        public orcRecordService: OrcRecordService
    ) {}

    ngOnInit() {
        this.addNotesForm = new FormGroup({
            notes: new FormControl('', Validators.required),
        });
    }

    formData(){
        let data: any  = {};
        data.comments = this.addNotesForm.value.notes;
        data.record_id = this.mantisRecord.orc_record.id;
        data.data = this.selectedData;
        return data;
    }    

    onSubmit() {
        if (this.addNotesForm.status === 'INVALID') {
            if (this.addNotesForm.controls.notes.invalid) {
                this.alerts.push({type: 'danger', message: this.addNotesForm.controls.group_id.errors});
            }
        } else {
            let data = this.formData();
            this.orcRecordService.addNotes(data).subscribe(
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

