import { Component, OnInit, Input } from '@angular/core';
import { MantisRecordModel } from '../../../../models';

@Component({
    selector: 'app-table-view',
    templateUrl: './table-view.component.html',
    styleUrls: ['./table-view.component.css']
})

export class TableViewComponent implements OnInit {
    @Input() mantisRecord: MantisRecordModel;
    @Input() fields;
    @Input() tables;
  
    constructor(
    ) {}
  
    ngOnInit() {
    }
  
    getColumnValue(columnField) {
        const field = columnField.field;
        const value = this.mantisRecord[field] || '<i class="text-danger">---</i>';
        if(columnField.cellTemplate){
            return columnField.cellTemplate(value)
        }
        return value
    }  
}
