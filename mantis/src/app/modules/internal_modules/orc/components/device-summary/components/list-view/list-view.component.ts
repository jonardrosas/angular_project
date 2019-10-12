import { Component, OnInit, Input } from '@angular/core';
import { MantisRecordModel } from '../../../../models';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})

export class ListViewComponent implements OnInit {
  @Input() mantisRecord: MantisRecordModel;
  @Input() tables;
  private _fields;

  @Input()
  set fields(fields){
      this._fields = {
        ...fields
      }
      this._fields.mainTable = fields.headTable.concat(fields.mainTable);
  };

  get fields() {
      return this._fields;
  }

  constructor(
  ) {}

  ngOnInit() {
  }

  getColumnValue(columnField) {
        if(columnField.field){
            const fields = columnField.field.split('__');
            let value;
            for (let key in fields){
                const field = fields[key];
                value = value ? value[field] : this.mantisRecord[field];
            }
            if(columnField.cellTemplate){
                return columnField.cellTemplate(value)
            }
            return value
        }else{
            return '';
        }
  }  

}
