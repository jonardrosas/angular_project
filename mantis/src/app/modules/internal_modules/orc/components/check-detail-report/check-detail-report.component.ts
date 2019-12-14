import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { NgbActiveModal } from './../../../../../modules/third_party_modules/ng_bootstrap';
import { OrcCheckModel, OrcCheckInterface } from './../../models/orccheck.model';
import { getOrcRecordCheckObject, getOrcRecordCheckObjectImages } from './../../store/actions/orcrecordcheck.actions';
import { getCheckDetail, getCheckDetailImages } from './../../store/selectors/orcrecordcheck.selectors';
import { DispoMangerService } from './../../services';
import { Subscription } from 'rxjs';
import * as orcModuleStore from './../../store';
import { MantisDispositionManager } from './../../scripts';

@Component({
  selector: 'app-check-detail-report',
  templateUrl: './check-detail-report.component.html',
  styleUrls: ['./check-detail-report.component.css']
})
export class CheckDetailReportComponent implements OnInit, OnDestroy {
    @Input() checkId;
    checkDataSubscription: Subscription;
    checkImagesSubscription: Subscription;
    checkData: OrcCheckInterface;
    public dispoManagerInstance: MantisDispositionManager;
    public columnDefs;
    readonly DEFAULT_GRID_COL = 6;
    public checkReviews;
    public checkReviewColumn;
    public checkAssessmentColumn;
    public checkImages;

    constructor(
        private activateRoute: ActivatedRoute,
        private store: Store<any>,
        private dispoService: DispoMangerService,
    ) {}  

    ngOnInit() {
        debugger;

        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.dispoManagerInstance = this.dispoService.initialized({mantisRecord: data})
                this.columnDefs = this.dispoManagerInstance.getCheckTableDetailInfo();
                this.checkReviewColumn = this.dispoManagerInstance.dispositionInstance.getChecksTable().checkReviewColumn;
                this.checkAssessmentColumn = this.dispoManagerInstance.dispositionInstance.getChecksTable().checkAssessmentColumn;
            }
        )

        this.activateRoute.queryParams.subscribe(
            (data) => {
                this.store.dispatch(getOrcRecordCheckObject({id: this.checkId}));
                this.store.dispatch(getOrcRecordCheckObjectImages({check: this.checkId}));
                this.getObject();
                this.getCheckImages();
            },
        )     

        this.activateRoute.paramMap.subscribe(
            params => {
                this.checkId = +params.get('checkId');
            }
        );

    }

    ngOnDestroy(){
        this.checkDataSubscription.unsubscribe();
        this.checkImagesSubscription.unsubscribe()
    }

    getObject(){
        this.checkDataSubscription = this.store.pipe(select(getCheckDetail)).subscribe(
            (data) => {
                if(data){
                    this.checkData = data;
                }
            },
            (err) => console.log(err),
            () => {
                alert('complete');
            }
        )
    }

    getCheckImages(){
        this.checkImagesSubscription = this.store.pipe(select(getCheckDetailImages)).subscribe(
            (data) => {
                if(data){
                    this.checkImages = data;
                }
            },
            (err) => console.log(err),
            () => {
                alert('complete');
            }
        )        
    }

    getGridCol(column){
        if(column.gridCol){
            return column.gridCol;
        }else{
            return this.DEFAULT_GRID_COL; 
        }
    }

    getValue(col, val){
        if(val && col.relatedName){
            return val[col.relatedName];
        }else{
            return val;
        }
    }

}
