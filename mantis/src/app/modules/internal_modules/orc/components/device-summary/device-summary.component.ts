import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';

import { MantisRecordModel } from './../../models';
import { MantisRecordService } from './../../services';
import { MantisDispositionManager } from './../../scripts';

@Component({
    selector: 'app-device-summary',
    templateUrl: './device-summary.component.html',
    styleUrls: ['./device-summary.component.css']
})

export class DeviceSummaryComponent implements OnInit {
    @Input() dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    public summaryTableInstance;
    public table;

    constructor(
        private mantisRecordService: MantisRecordService,
        private store: Store<any>
    ) { }


    ngOnInit() {
        this.getObject();
        this.summaryTableInstance = this.dispoManagerInstance.getDeviceSummaryTables();
        debugger;
        this.table = this.summaryTableInstance.getTables();
    }
    
    getColumnValue(columnField: string) {
        return this.mantisRecord[columnField];
    }

    getObject() {
        debugger;
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                debugger;
                const orcRecord = { ...data.orc_record };
                delete data.orc_record;
                this.mantisRecord = {
                    ...data,
                    ...orcRecord
                };
            }
        );
    }

}
