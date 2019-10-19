import { Component, OnInit, Input } from '@angular/core';
import { MantisRecordModel } from './../../models';

@Component({
  selector: 'app-detail-header-table',
  templateUrl: './detail-header-table.component.html',
  styleUrls: ['./detail-header-table.component.css']
})

export class DetailHeaderTableComponent implements OnInit {
  @Input() mantisRecord;
  @Input() dispoManagerInstance;
  public summaryTableInstance;
  public fields;

  constructor() { }

  ngOnInit() {
      this.summaryTableInstance = this.dispoManagerInstance.getDeviceSummaryTables();
      this.fields = this.summaryTableInstance.getHeadFields();    
  }

  getColumnValue(columnField) {
      const field = columnField.field;
      const value = this.mantisRecord[field] || '';
      if(columnField.cellTemplate){
          return columnField.cellTemplate(value)
      }
      return value
  }    

}
