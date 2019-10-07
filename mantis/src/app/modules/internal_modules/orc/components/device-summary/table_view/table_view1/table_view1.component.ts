import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

import { MantisRecordModel } from '../../../../models';


@Component({
    selector: 'table-view-1',
    templateUrl: './table_view1.component.html',
    styleUrls: ['./table_view1.component.css']
})


export class TableView1Component implements OnInit {
    @Input() mantisRecord: MantisRecordModel;
    @Input() table;
    
    constructor(
    ) {}

    ngOnInit() {}

    getColumnValue(columnField: string) {
        return this.mantisRecord[columnField];
    }

}