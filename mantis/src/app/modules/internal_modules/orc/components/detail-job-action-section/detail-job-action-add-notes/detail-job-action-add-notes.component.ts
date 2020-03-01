import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { MantisRecordService } from './../../../services';
import { NgAlertInterface } from './../../../../../../core/models';
import { NgbActiveModal } from './../../../../../third_party_modules/ng_bootstrap';


@Component({
  selector: 'app-detail-job-action-add-notes',
  templateUrl: './detail-job-action-add-notes.component.html',
  styleUrls: ['./detail-job-action-add-notes.component.css']
})
export class DetailJobActionAddNotesComponent implements OnInit {
    @Input() mantisRecord;
    public jobAddNotesForm;
    public container;
    public heading: string = "Add Notes";
    public alerts: NgAlertInterface[] = [];
    public placeholderComments: string = "job comments here (max=600 characters)";

    constructor(
        public activeModal: NgbActiveModal,
        public mantisRecordService: MantisRecordService
        ) { }

    ngOnInit() {
        debugger;
        this.jobAddNotesForm = new FormGroup ({
            comments: new FormControl('', Validators.required),
            bug_id: new FormControl(this.container.mantisId),
            drc_sumry: new FormControl(false),
            drc_dwc_note: new FormControl(false)
        })
    }


    onSubmit () {
        const data = this.jobAddNotesForm.value
        this.mantisRecordService.addJobNotes(data).subscribe(
            (data) => {
                debugger;
                if(data.status == 'success'){
                    this.alerts.push({message: data.msg, type: 'success'})
                    this.activeModal.close()
                    /*setTimeout(
                        ()=>this.activeModal.close()
                    )*/
                }else{
                    this.alerts.push({message: data.msg, type: 'danger'})
                }
            }
        )
    }    

    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }    

}
