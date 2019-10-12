import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from '../../scripts/common/add-jobreport-section';

@Component({
  selector: 'app-detail-error-statistics',
  templateUrl: './detail-error-statistics.component.html',
  styleUrls: ['./detail-error-statistics.component.css']
})
export class DetailErrorStatisticsComponent extends ButtonCollapse implements OnInit {
    @Input() dispoManagerInstance: MantisDispositionManager;    
    public description: string;

    constructor(
        private store: Store<any>
    ) {
        super()
    }

    ngOnInit() {
        this.getObject(this.dispoManagerInstance.dispoParams.mantisRecord.bug_text.id);
    }

    getObject(id) {
        this.store.dispatch(orcModuleStore.getMantisErrorSummaryAction({id}));
        this.store.pipe(select(orcModuleStore.getMantisRecordSummaryStateSelector)).subscribe(
            (data) => {
                this.description = data;
            }
        );

    }

}
