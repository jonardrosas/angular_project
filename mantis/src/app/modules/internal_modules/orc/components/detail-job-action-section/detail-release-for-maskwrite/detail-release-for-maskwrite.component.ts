import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from './../../../../../third_party_modules/ng_bootstrap';
import { NgAlertInterface } from './../../../../../../core/models';
import { BootstrapConfirmComponent } from './../../../.././../../shared/';
import { MantisRecordService } from './../../../services';

@Component({
  selector: 'app-detail-release-for-maskwrite',
  templateUrl: './detail-release-for-maskwrite.component.html',
  styleUrls: ['./detail-release-for-maskwrite.component.css']
})
export class DetailReleaseForMaskwriteComponent implements OnInit {
    public releaseForMaskWriteForm;
    public mantisRecord;
    public container;
    public alerts: NgAlertInterface[] = [];
    public status;
    public heading: string = "Close Job with Mantis id";

    constructor(
        public activeModal: NgbActiveModal,
        private modalService: NgbModal,
        public mantisRecordService: MantisRecordService
    ) { }

    ngOnInit() {

        this.releaseForMaskWriteForm = new FormGroup ({
            status: new FormControl('', Validators.required),
            comments: new FormControl('', Validators.required),
            mantisId: new FormControl(this.container.mantisId)
        })
        debugger;
        this.status = this.getStatus()
    }


    close(alert: NgAlertInterface) {
        this.alerts.splice(this.alerts.indexOf(alert), 1);
    }    


    getStatus() {
        if( (this.mantisRecord.pdbstatus == 'validated') && (this.mantisRecord.orc_record.aggregate_status == 'POA') ) {
            return ['Passed ProtoOwner', 'Fail ProtoOwner'];
        }
        else{
            return ['Passed ProtoOwner', 'Passed Weakpoint', 'Passed Patched', 'Fail ProtoOwner'];
        }
    };      

    onSubmit(){
        const modalRef = this.modalService.open(BootstrapConfirmComponent)
        modalRef.componentInstance.data = {message: `You are closing this job. Are you sure?`, type: 'info'}
        modalRef.result.then(
                (result) => {
                    const requestData = this.releaseForMaskWriteForm.value
                    this.mantisRecordService.orcReleaseForMaskWrite(requestData).subscribe(
                        (data) => {
                            if(data.status == 'success'){
                                this.container.getObjectUsingStore()
                                this.activeModal.dismiss()
                            }else{
                                this.alerts.push({type: 'danger', message: data.msg});
                            }
                        }
                    )
                }, (reason) => {
                    console.log('Reason', reason);
                }
            )        
    }    

}
