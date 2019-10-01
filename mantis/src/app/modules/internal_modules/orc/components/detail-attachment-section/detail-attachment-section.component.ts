import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import * as orcModuleStore from './../../store';
import { MantisAttachmentInterface } from './../../models';

@Component({
    selector: 'app-detail-attachment-section',
    templateUrl: './detail-attachment-section.component.html',
    styleUrls: ['./detail-attachment-section.component.css']
})

export class DetailAttachmentSectionComponent implements OnInit {
    @Input() public mantisId: number;
    public attachments$: Observable<MantisAttachmentInterface[]>;

    constructor(
      private store: Store<any>
    ) { }

    ngOnInit() {
      this.store.dispatch(orcModuleStore.getMantisAttachmentAction({ bug_id: this.mantisId }));
      this.getObject();
    }

    getObject() {
      this.attachments$ = this.store.pipe(select(orcModuleStore.getMantisRecordJobAttachmentStateSelector));
    }


}
