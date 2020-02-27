import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NgbActiveModal, NgbModal } from './../../../../../modules/third_party_modules/ng_bootstrap';
import { OrcCheckModel, OrcCheckInterface } from './../../models/orccheck.model';
import { getOrcRecordCheckObject, getOrcRecordCheckObjectImages } from './../../store/actions/orcrecordcheck.actions';
import { getCheckDetail, getCheckDetailImages } from './../../store/selectors/orcrecordcheck.selectors';
import { ReportCheckDispostionPopups, reportStore } from './../../containers/detail/detail.component.configuration';
import { DispoMangerService, OrcRecordService } from './../../services';
import * as _ENUMS from './../../scripts/enums';
import { Subscription } from 'rxjs';
import * as orcModuleStore from './../../store';
import { MantisDispositionManager } from './../../scripts';
import { ButtonCollapse } from './../../util/';
import { NgAlertInterface } from './../../../../../core';
import { BootstrapConfirmComponent } from './../../../../../shared/';

@Component({
  selector: 'app-check-detail-report',
  templateUrl: './check-detail-report.component.html',
  styleUrls: ['./check-detail-report.component.css']
})
export class CheckDetailReportComponent extends ButtonCollapse implements OnInit, OnDestroy {
    @Input() checkIns;
    @Input() enableActionButtons;
    public dispoManagerInstance: MantisDispositionManager;
    
    public columnDefs;
    readonly DEFAULT_GRID_COL = 6;

    public checkReviewColumn;
    public checkAssessmentColumn;
    
    public buttons;
    public agGrid;
    public mainTabs;

    public data = {
        img: {panelIsOpen: false},
        info: {panelIsOpen: false},
        reviews: {panelIsOpen: false},
        assessment: {panelIsOpen: false},
    }

    constructor(
        private store: Store<any>,
        private dispoService: DispoMangerService,
    ) {
        super()
    }  


    ngOnInit() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                if(data.id){
                    this.dispoManagerInstance = this.dispoService.initialized({
                            mantisRecord: data,
                            registeredCheckPopUps: ReportCheckDispostionPopups,
                            store: reportStore                              
                        }
                    )
                    this.columnDefs = this.dispoManagerInstance.checkDetailInfo;
                    this.mainTabs = this.dispoManagerInstance.checkMainTabs;
                    this.checkReviewColumn = this.dispoManagerInstance.checkReviewHistoryColumn;
                    this.checkAssessmentColumn = this.dispoManagerInstance.checkAssessmentHistoryColumn;
                }
            }
        )

    }

    ngOnDestroy(){
        // this.checkDataSubscription.unsubscribe();
    }

    getValue(col, val){
        if(val && col.relatedName){
            return val[col.relatedName];
        }else{
            return val;
        }
    }


}
