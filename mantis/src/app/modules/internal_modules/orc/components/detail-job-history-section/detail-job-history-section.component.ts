import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { MantisRecordHistoryInterface } from './../../models';
import * as orcModuleStore from './../../store';


@Component({
  selector: 'app-detail-job-history-section',
  templateUrl: './detail-job-history-section.component.html',
  styleUrls: ['./detail-job-history-section.component.css']
})
export class DetailJobHistorySectionComponent implements OnInit {
    @Input() public mantisId: number;
    public histories$: Observable<MantisRecordHistoryInterface[]>;

    constructor(
        private store: Store<any>
    ) { }

    ngOnInit() {
        this.store.dispatch(orcModuleStore.getMantisHistoryAction({bug_id: this.mantisId}));
        this.getObject();
  }

    getObject() {
        this.histories$ = this.store.pipe(select(orcModuleStore.getMantisRecordJobHistoryStateSelector));
    }

}
