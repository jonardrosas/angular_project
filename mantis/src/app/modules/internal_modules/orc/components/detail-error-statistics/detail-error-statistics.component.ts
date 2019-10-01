import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as orcModuleStore from './../../store';

@Component({
  selector: 'app-detail-error-statistics',
  templateUrl: './detail-error-statistics.component.html',
  styleUrls: ['./detail-error-statistics.component.css']
})
export class DetailErrorStatisticsComponent implements OnInit {
    @Input() public bugTextId: number;
    @Input() set close(close) {
        if (!close) {
            this.getObject(this.bugTextId);
        }
    }
    public description: string;

    constructor(
        private store: Store<any>
    ) { }

    ngOnInit() {}

    getObject(id) {
        this.store.dispatch(orcModuleStore.getMantisErrorSummaryAction({id}));
        this.store.pipe(select(orcModuleStore.getMantisRecordSummaryStateSelector)).subscribe(
            (data) => {
                this.description = data;
            }
        );

    }

}
