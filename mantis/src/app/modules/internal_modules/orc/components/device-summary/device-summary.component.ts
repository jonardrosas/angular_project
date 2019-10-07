import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';

import { MantisRecordModel } from './../../models';
import { MantisRecordService } from './../../services';
import { DeviceSummaryTable } from './../../scripts/summary/tables.model';
import { DefaultTableViewComponent } from './table_view/table_default/table_default.component';
import { TableView1Component } from './table_view/table_view1/table_view1.component';

@Component({
    selector: 'app-device-summary',
    templateUrl: './device-summary.component.html',
    styleUrls: ['./device-summary.component.css']
})

export class DeviceSummaryComponent implements OnInit {
    public mantisRecord: MantisRecordModel;
    public deviceSummaryInstance: DeviceSummaryTable;
    public table: object;
    public viewType: string = "default";

    constructor(
        private mantisRecordService: MantisRecordService,
        private store: Store<any>
    ) { }

    ngOnInit() {
        this.getObject();
    }

    createTable(mantisRecord: MantisRecordModel) {
        this.deviceSummaryInstance = new DeviceSummaryTable(mantisRecord);
        this.table = this.deviceSummaryInstance.getTables();
    }

    getColumnValue(columnField: string) {
        return this.mantisRecord[columnField];
    }

    getObject() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                const orcRecord = { ...data.orc_record };
                delete data.orc_record;
                this.mantisRecord = {
                    ...data,
                    ...orcRecord
                };
                this.createTable(this.mantisRecord);
            }
        );
    }
    
    defaultClick(){
        this.viewType = "default";
    }
    
    view1Click(){
        this.viewType = "view1";
    }

}
