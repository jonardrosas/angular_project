import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ButtonCollapse } from './../../util/';
import { DispoMangerService, MantisRecordService } from './../../services';
import { APP_CONFIG } from './../../../../../configs';
import { NgbActiveModal, NgbModal } from './../../../../../modules/third_party_modules/ng_bootstrap';
import { BootstrapConfirmComponent } from './../../../../../shared/';
import { NgAlertInterface } from './../../../../../core';

import * as orcModuleStore from './../../store';
import { MantisAttachmentInterface } from './../../models';

@Component({
    selector: 'app-detail-attachment-section',
    templateUrl: './detail-attachment-section.component.html',
    styleUrls: ['./detail-attachment-section.component.css']
})
export class DetailAttachmentSectionComponent extends ButtonCollapse implements OnInit, OnDestroy {
    @Input() public mantisId: number;
    @Input() public container;
    public alerts: NgAlertInterface[] = [];    
    public attachments;
    public button;
    private attachmentSubscription: Subscription;
    public media_url: string = APP_CONFIG.BASE_URL + '/media/job_reports/';

    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
        private modalService: NgbModal,
        private mantisRecordService: MantisRecordService
    ) {
      super()
    }

    ngOnInit() {
        this.getObject();
        this.button = this.dispoService.dispoManagerInstance.jobButtons.caddAttachment;
    }

    ngOnDestroy(){
       this.attachmentSubscription.unsubscribe()
    }



    getBaseUrl(mantisId: number){
        const id = mantisId / 10000 | 0
        return  this.media_url + id + '/';
    }

    getObject() {
        this.attachmentSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordJobAttachmentStateSelector))
        .subscribe(
             (data) => {
                this.attachments = data;
             }    
        );
    }

    deleteAttachment(attachment){
        const modalRef = this.modalService.open(BootstrapConfirmComponent)
        modalRef.componentInstance.data = {message: `Are you sure, you want to delete ${attachment.filename}?`, type: 'info'}
        modalRef.result.then(
                (result) => {
                    const requestData = {
                        bug_id: attachment.bug_id,
                        filename: attachment.filename,
                        size: attachment.filesize
                    };
                    this.mantisRecordService.deleteJobAttachment(requestData).subscribe(
                        (data) => {
                            if(data.status == 'success'){
                                this.container.getObjectUsingStore()
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
