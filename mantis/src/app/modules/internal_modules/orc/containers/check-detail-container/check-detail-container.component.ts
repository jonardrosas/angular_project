import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DispoMangerService } from '../../services'
import { DispostionParameter } from '../../scripts';
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
  checkId;
  mantisRecord;
  dispoManagerInstance;
  url: string = ENUMS.JOB_REPORT_URL;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
    private dispoService: DispoMangerService,
  ) { }

  ngOnInit() {
      this.activatedRoute.paramMap.subscribe(params => {
          this.mantisId = +params.get('mantisId');
          this.checkId = +params.get('checkId');
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


}
