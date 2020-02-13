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
    @Input() checkId;
    @Input() enableActionButtons;
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
    public buttons;
    public agGrid;
    public mainTabs;
    public data = {
        img: {panelIsOpen: true},
        info: {panelIsOpen: true},
        reviews: {panelIsOpen: true},
        assessment: {panelIsOpen: true},
    }
    public ruleDescMode = {};
    public ruleDescData = {}    
    public imageForm = {};
    public alerts: NgAlertInterface[] = [];

    constructor(
        private activateRoute: ActivatedRoute,
        private store: Store<any>,
        private dispoService: DispoMangerService,
        public orcRecordService: OrcRecordService,
        private modalService: NgbModal,
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
                    this.columnDefs = this.dispoManagerInstance.getCheckTableDetailInfo();
                    this.mainTabs = this.dispoManagerInstance.checkMainTabs;
                    this.checkReviewColumn = this.dispoManagerInstance.dispositionInstance.getChecksTable().checkReviewColumn;
                    this.checkAssessmentColumn = this.dispoManagerInstance.dispositionInstance.getChecksTable().checkAssessmentColumn;
                }
            }
        )

        this.activateRoute.queryParams.subscribe(
            (data) => {
                this.store.dispatch(getOrcRecordCheckObject({id: this.checkId}));
                this.getObject();
            },
        )     

        this.activateRoute.paramMap.subscribe(
            params => {
                this.store.dispatch(getOrcRecordCheckObject({id: this.checkId}));
                this.getObject();
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
                if(data.id){
                    this.checkData = data;
                    this.store.dispatch(getOrcRecordCheckObjectImages({check: data.id}));
                    this.getCheckImages();
                    this.agGrid = new this.dispoManagerInstance.checkApi();
                    this.agGrid.add(data)
                    for (let tab of this.mainTabs){
                        if(tab.status.indexOf(data.status) > -1){
                            this.buttons = this.dispoManagerInstance.checkDispositionButtons[tab.id]
                            break
                        }
                    }
                    if(!this.buttons){
                        this.buttons = this.dispoManagerInstance.checkDispositionButtons[_ENUMS.TAB1.id]
                    }
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
                this.checkImages = []
                if(data.length > 0){
                    for (let key in data){
                        let img = data[key];
                        this.checkImages.push(img)
                        this.imageForm[img.id] = new FormGroup({
                            image_id: new FormControl(''),
                            decription: new FormControl(''),
                        });
                        this.ruleDescMode[img.id] = 'read';
                        this.imageForm[img.id].controls.decription.setValue(img.description)
                        this.imageForm[img.id].controls.image_id.setValue(img.id)
                    }
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

    updateDescription(id){
        this.ruleDescMode[id] = 'edit'
    }

    saveImgForm(id){
        this.orcRecordService.updateImageDescription(this.imageForm[id].value).subscribe(
            (data) => {
                if(data.status == 'success'){
                    this.alerts.push({type: 'success', message: data.msg});
                    setTimeout(
                        (data) => {
                            this.store.dispatch(getOrcRecordCheckObjectImages({check: this.checkId}));
                            this.ruleDescMode = 'read'
                            this.getObject()
                        }, 1000
                    )
                }else{
                    this.alerts.push({type: 'danger', message: data.msg});
                }
            }
        )        
    }    

    deleteImgForm(id){

        const modalRef = this.modalService.open(BootstrapConfirmComponent)
        modalRef.componentInstance.data = {message: 'Are you sure?', type: 'info'}
        modalRef.result.then(
                (result) => {
                    this.orcRecordService.deleteImage({image_id: id}).subscribe(
                        (data) => {
                            if(data.status == 'success'){
                                this.alerts.push({type: 'success', message: data.msg});
                                setTimeout(
                                    (data) => {
                                        this.ruleDescMode = 'read'
                                        this.getObject()
                                    }, 2000
                                )
                            }else{
                                this.alerts.push({type: 'danger', message: data.msg});
                            }
                        }
                    )
                }, (reason) => {
                    console.log('Reason', reason);
                }
            )        
        /*
        this.orcRecordService.deleteImage({image_id: id}).subscribe(
            (data) => {
                if(data.status == 'success'){
                    this.alerts.push({type: 'success', message: data.msg});
                    setTimeout(
                        (data) => {
                            this.ruleDescMode = 'read'
                            this.store.dispatch(getOrcRecordCheckObjectImages({check: this.checkId}));
                            this.getCheckImages()
                        }, 2000
                    )
                }else{
                    this.alerts.push({type: 'danger', message: data.msg});
                }
            }
        ) */       
    }      

}
