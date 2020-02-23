import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DispoMangerService } from '../../services'
import { DispostionParameter } from '../../scripts';
import { OrcCheckModel } from '../../models';
import {  } from '../../models';
import * as ENUMS from './../../scripts/enums';
import * as orcModuleStore from '../../store';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-check-detail',
  templateUrl: './check-detail-container.component.html',
  styleUrls: ['./check-detail-container.component.css']
})
export class CheckDetailContainerComponent implements OnInit {
  mantisId;
  checkIns;
  buttons;
  mantisRecord;
  checkModelInst;
  dispoManagerInstance;
  url: string = ENUMS.JOB_REPORT_URL;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
    private dispoService: DispoMangerService,
  ) { }

  ngOnInit() {
      this.checkModelInst = new OrcCheckModel()
      this.activatedRoute.paramMap.subscribe(params => {
          this.mantisId = +params.get('mantisId');
          const checkId = +params.get('checkId');
          this.getCheckObject(checkId)
          this.store.dispatch(orcModuleStore.getMantisObjectAction({id: this.mantisId}));
          this.loadMantisRecord()
      });

  }  

  loadMantisRecord() {
      this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector))
      .subscribe(
          (data) => {
              this.mantisRecord = data;
              if (data.id) {
                  const paramsIns: DispostionParameter = {
                      mantisRecord: this.mantisRecord,
                      store: orcModuleStore                         
                  }
                  this.dispoManagerInstance = this.dispoService.initialized(paramsIns) 
              }
          },
    );
  }

  getCheckObject(id){
      this.checkModelInst.objects.get(id).subscribe(
          (data)=> {
            if(data.id){
              this.checkIns = data;
            }
          }
      )
  }  


}
