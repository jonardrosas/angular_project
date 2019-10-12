import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from '../../scripts/common/add-jobreport-section';

@Component({
    selector: 'app-device-summary',
    templateUrl: './device-summary.component.html',
    styleUrls: ['./device-summary.component.css']
})

export class DeviceSummaryComponent extends ButtonCollapse implements OnInit {
    @Input() dispoManagerInstance: MantisDispositionManager;
    public mantisRecord;
    public summaryTableInstance;
    public tables;
    public fields: {
        headTable;
        mainTable;
        directoriesTable;
        additionalInfoTable;
    };    

    constructor(
    ) {
        super()
    }

    ngOnInit() {
        this.summaryTableInstance = this.dispoManagerInstance.getDeviceSummaryTables();
        this.mantisRecord = {
            ...this.dispoManagerInstance.dispoParams.mantisRecord,
        }
        this.tables = this.summaryTableInstance.getTables();
        this.fields = this.summaryTableInstance.getAllFields();
    }

}
