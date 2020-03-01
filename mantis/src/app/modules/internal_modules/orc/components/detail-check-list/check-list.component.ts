import { 
    Component, OnInit, Input, ViewChild, AfterViewInit,
    OnDestroy
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { MantisDispositionManager } from './../../scripts';
import * as orcModuleStore from './../../store';
import { MantisRecordModel, OrcCheckAsessment, OrcCheckInterface, MantisResolution } from './../../models';
import { ButtonCollapse } from './../../util/';
import * as ENUMS from './../../../orc/scripts/';
import { CheckStatusTemplateComponent } from './../../components/detail-check-list/components/check-status-template/check-status-template.component';
import { DispoMangerService } from './../../services';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})

export class CheckListComponent extends ButtonCollapse implements OnInit, AfterViewInit, OnDestroy {
    @Input() public mantisId: number;
    @Input() public container;
    public rowData$:  Observable<OrcCheckInterface[] | OrcCheckAsessment[]>;
    public rowCurrentDataObj: any = {};
    public columnDefs: any;
    public dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    public assessmentModel = new OrcCheckAsessment();
    public countSubscription: Subscription;
    public mantisRecordSubscription: Subscription;
    public frameworkComponents = {
        checkStatusTemplateComponent: CheckStatusTemplateComponent
    }
    public url: string = ENUMS.JOB_REPORT_URL;
    public queryParams: string;
    public queryGroupTab: string;
    public mainTabs: any[];
    public buttons;
    public object$: Observable<OrcCheckAsessment>;
    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        theme: `detail-check ag-theme-balham`
    };
    public filters = {};
    public checkAction;
    public checkSelector;
    public checkStat = {
        default: {},
        count: {},
        subtab: {},
    };

    public defaultSelector;
    public assignedIstSelector;
    public assignedSoaSelector;
    public previousSelectedRow = [];
    public subTab = {};
    public checkFilter: {limit?: number; record?: number} = {};

    constructor(
        private store: Store<any>,
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute,
        private dispoService: DispoMangerService,
    ) {
        super()
    }

    ngOnInit() {
        this.mantisRecordSubscription = this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                this.dispoManagerInstance = this.dispoService.initialized({mantisRecord: data})

                this.mainTabs = this.dispoManagerInstance.checkMainTabs;
                this.dispoManagerInstance.checkComponentInstance = this;
                this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkCheckStatCountAction({record: data.orc_record.id}))
            }
        )

        this.activatedRoute.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');
            this.store.dispatch(orcModuleStore.getMantisObjectAction({id: this.mantisId}));
            if(!this.queryParams){
                this.queryParams = ENUMS.DEFAULT;
            }
            setTimeout(
                () => this.loadCheck(this.queryParams), 600
            )            
        });         

        this.activatedRoute.queryParams.subscribe(
            (data) => {
                this.queryParams = data.check_section ? data.check_section : ENUMS.DEFAULT;
                this.getCheckStatCount();
                this.queryGroupTab = data.group;
                setTimeout(
                    () => this.loadCheck(this.queryParams), 600
                )
            }
        ) 


    }

    ngOnDestroy(){
        this.countSubscription.unsubscribe()
        this.mantisRecordSubscription.unsubscribe()
        this.modalService.dismissAll('haha')
    }        


    getCheckStatCount(){
        this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkCheckStatCountAction({record: this.mantisRecord.orc_record.id}))
        this.countSubscription = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkCheckStatCountSelector)).subscribe(
            (data) => {        
                this.checkStat = data.count;
                this.subTab = {
                    ...data.subtab
                }
            }
        )
    }      

    // called from template
    reloadCheck(){
        const queryParams = this.queryParams ?  this.queryParams : ENUMS.DEFAULT;
        this.loadCheck(queryParams)
        this.getCheckStatCount()
        this.container.getObjectUsingStore(this.mantisId)
    }

    loadCheck(queryParams?){
        this.checkFilter['limit'] = 2000;
        this.checkFilter['record'] = this.mantisRecord.orc_record.id;

        if(!queryParams){
            queryParams = this.queryParams;
        }else{
            this.rowCurrentDataObj[queryParams] = {};
        }

        if(this.queryGroupTab){
            this.checkFilter['group'] = this.queryGroupTab;
        }else{
             this.checkFilter['group'] = ENUMS.ALL;
        }

        if(queryParams === ENUMS.TAB2.id){
            this.checkFilter['status'] = ENUMS.TAB2.status;
            this.columnDefs = this.dispoManagerInstance.checkColumnDefs;
            this.buttons = this.dispoManagerInstance.checkDispositionButtons[ENUMS.TAB2.id]

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedAction(this.checkFilter));
            this.rowData$ = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedIstSelector));
            this.rowCurrentDataObj[queryParams] = this.rowData$;

        }else if(queryParams === ENUMS.TAB3.id){
            this.checkFilter['status'] = ENUMS.TAB3.status;
            this.columnDefs = this.dispoManagerInstance.checkColumnDefs;
            this.buttons = this.dispoManagerInstance.checkDispositionButtons[ENUMS.TAB3.id]

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedSoaAction(this.checkFilter));                          
            this.rowData$ = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedSoaSelector))
            this.rowCurrentDataObj[queryParams] = this.rowData$;

        }else if(queryParams === ENUMS.TAB4.id){
            this.checkFilter['status'] = ENUMS.TAB4.status;
            this.columnDefs = this.dispoManagerInstance.checkColumnDefs;
            this.buttons = this.dispoManagerInstance.checkDispositionButtons[ENUMS.TAB4.id]

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedAction(this.checkFilter));
            this.rowData$ = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedIstSelector));
            this.rowCurrentDataObj[queryParams] = this.rowData$;
        }
        else if(queryParams === ENUMS.TAB5.id){
            this.columnDefs = this.dispoManagerInstance.checkZeroColumn;
            this.buttons = this.dispoManagerInstance.checkDispositionButtons[ENUMS.TAB5.id]

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkZeroTableStoreAction(this.checkFilter))
            this.rowData$ = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkZeroTableStoreSelector))
            this.rowCurrentDataObj[queryParams] = this.rowData$;            
        }else{
            this.columnDefs = this.dispoManagerInstance.checkColumnDefs;
            this.buttons = this.dispoManagerInstance.checkDispositionButtons[ENUMS.TAB1.id]

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAction(this.checkFilter));
            this.rowData$ = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkTableStoreSelector))
            this.rowCurrentDataObj[queryParams] = this.rowData$;
        }        

        this.refreshGrid()
    }       

    ngAfterViewInit() {
        this.agGrid.api.sizeColumnsToFit();
        this.agGrid.api.setDomLayout('autoHeight');
    }

    isActiveGroupTab(tab){
        if(!this.queryGroupTab && tab == ENUMS.ALL){
            return 'active'
        }
        if(tab === this.queryGroupTab){
            return 'active';
        }else{
            return '';
        }
    }

    getSubTabIcons(tab){
        if(tab in ENUMS.CHECK_STAGE_ICONS){
            return ENUMS.CHECK_STAGE_ICONS[tab]
        }
    }

    autoSelectCheck(){
        setTimeout(
            () => {
                this.agGrid.api.forEachNode(
                    (node) => {
                        if(this.previousSelectedRow.indexOf(node.data.id) > -1){
                            node.setSelected(true)
                        }
                    }
                )                
            }, 1000
        )
    }

    refreshGrid() {
        if(this.agGrid){
            setTimeout(
                () => {
                    this.agGrid.api.sizeColumnsToFit()
                    this.agGrid.api.setDomLayout('autoHeight');
                }
            )
            this.autoSelectCheck()
        }
    }

}
