import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ButtonCollapse } from './../../util/';
import { DispoMangerService } from './../../services';

import * as orcModuleStore from './../../store';
import { MantisAttachmentInterface } from './../../models';

@Component({
    selector: 'app-detail-attachment-section',
    templateUrl: './detail-attachment-section.component.html',
    styleUrls: ['./detail-attachment-section.component.css']
})
export class DetailAttachmentSectionComponent extends ButtonCollapse implements OnInit, OnDestroy {
    @Input() public mantisId: number;
    public attachments;
    public button;
    private attachmentSubscription: Subscription;

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

    getObject() {
        this.attachmentSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordJobAttachmentStateSelector))
        .subscribe(
             (data) => {
                this.attachments = data;
             }    
        );
    }


}
