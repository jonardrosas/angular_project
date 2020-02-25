import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ButtonCollapse } from './../../util/';
import { DispoMangerService } from './../../services';
import { APP_CONFIG } from './../../../../../configs';

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
    public attachments;
    public button;
    private attachmentSubscription: Subscription;
    public media_url: string = APP_CONFIG.BASE_URL + '/media/job_reports/';

    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
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
        alert('Not working yet');
    }


}
