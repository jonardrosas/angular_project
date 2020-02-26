import { Component, OnInit, Input, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MantisRecordModel } from './../../models';
import { Store, select } from '@ngrx/store';
import * as orcModuleStore from './../../store';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from './../../util/';
import { Observable, Subscription } from 'rxjs';
import { DispoMangerService } from './../../services';

@Component({
    selector: 'app-device-summary',
    templateUrl: './device-summary.component.html',
    styleUrls: ['./device-summary.component.css']
})

export class DeviceSummaryComponent extends ButtonCollapse implements OnInit, OnDestroy {
    @Input() dispoManagerInstance: MantisDispositionManager;
    public mantisRecord;
    public deviceSummary;
    public tables;
    public fields: {
        headTable;
        mainTable;
        directoriesTable;
        additionalInfoTable;
    };    
    public stageSubscription: Subscription;
    public mantisRecordSubscription: Subscription;
    public stageMapping: any;
    private defaultCol: string = '3';

    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
    ) {
        super()
    }

    ngOnInit() {
        this.mantisRecordSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                this.tables = this.dispoService.dispoManagerInstance.deviceSummary;
            }
       
        )
        this.getStages()
    }

    ngOnDestroy(){
        this.stageSubscription.unsubscribe()
        this.mantisRecordSubscription.unsubscribe()
    }

    getClass(field) {
        if(field.col){
            return field.col;
        }
        return this.defaultCol;
    }

    getStages(){
        this.stageSubscription = this.store.pipe(select(orcModuleStore.getMantisStagesStateSelector))
        .subscribe(
            (data) => {
                this.stageMapping = {};
                for(let obj of data){
                    this.stageMapping[obj.id] = obj;
                }
            }
        )
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
                  return columnField.cellTemplate(value, this.mantisRecord, this.stageMapping)
              }
              return value
          }else{
              return '';
          }
         
    }
}
