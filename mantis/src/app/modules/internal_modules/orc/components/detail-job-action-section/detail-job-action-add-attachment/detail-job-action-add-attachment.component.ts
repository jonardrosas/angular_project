import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SafeUrl } from "@angular/platform-browser";
import { MantisRecordService } from './../../../services/';
import { MantisRecordModel } from './../../../models/';
import { NgAlertInterface } from '../../../../../../core/models';
import { NgbActiveModal } from '../../../../../third_party_modules/ng_bootstrap';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-detail-job-action-add-attachment',
  templateUrl: './detail-job-action-add-attachment.component.html',
  styleUrls: ['./detail-job-action-add-attachment.component.css']
})
export class DetailJobActionAddAttachmentComponent implements OnInit {
    public heading: string = 'Add Job Attachment';
    public container;
    public files: any[];
    public alerts: NgAlertInterface[] = [];
    public imageUrls: SafeUrl[];

    private lastObjectUrl: string;    
    private sanitizer: DomSanitizer;    

    constructor(
        public mantisRecordService: MantisRecordService,
        public activeModal: NgbActiveModal,
        sanitizer: DomSanitizer,
    ) {
       this.files = [];
       this.imageUrls = [];
       this.lastObjectUrl = "";      
       this.sanitizer = sanitizer;
    }

    ngOnInit() {
    }  

    onSubmit() {
        const formData = new FormData();
        for (const file of this.files) {
            formData.append('file', file);
            formData.append('bug_id', this.container.mantisRecord.id);
        }

        this.mantisRecordService.addJobAttachment(formData).subscribe(
            (data) => {
                debugger;
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

    /*
    updateImageUrls(){
        this.imageUrls = [];
        for (let key in this.files){
            let file = this.files[key];
            this.lastObjectUrl = URL.createObjectURL(file);
            this.imageUrls.unshift(
                this.sanitizer.bypassSecurityTrustUrl( this.lastObjectUrl )
            );        
        }
    }
    */   

    onFileChanged(event: any) {
        Array.from(event.target.files).forEach(file => { 
            this.files.unshift(
                file
            )              
        });
        // this.updateImageUrls()
    }    


}
