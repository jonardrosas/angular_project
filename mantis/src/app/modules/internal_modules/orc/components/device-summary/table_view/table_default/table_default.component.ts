import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { MantisRecordModel } from '../../../../models';

@Component({
    selector: 'table-default',
    templateUrl: './table_default.component.html',
    styleUrls: ['./table_default.component.css']
})

export class DefaultTableViewComponent implements OnInit {
    @Input() mantisRecord: MantisRecordModel;
    @Input() table;
    
    constructor(
    ) {}

    ngOnInit() {}

    getColumnValue(columnField: string) {
        return this.mantisRecord[columnField];
    }

}