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
    }

    getClass(field) {
        if(field.col){
            return field.col;
        }
        return '3';
    }

    getColumnValue(columnField) {
          if(columnField.field){
              const fields = columnField.field.split('__');
              let value;
              for (let key in fields){
                  const field = fields[key];
                  value = value ? value[field] : this.mantisRecord[field];
              }
              if (!value){
                  return '';
              }
              if(columnField.cellTemplate){
                  return columnField.cellTemplate(value, this.mantisRecord)
              }
              return value
          }else{
              return '';
          }
         
    }
}
