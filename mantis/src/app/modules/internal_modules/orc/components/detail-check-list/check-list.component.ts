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
    public rowData$:  Observable<OrcCheckInterface[] | OrcCheckAsessment[]>;
    public rowCurrentDataObj: any = {};
    public columnDefs: any;
    public dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    public assessmentModel = new OrcCheckAsessment();
    public countSubscription: Subscription;
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
        count: {},
        subtab: {},
    };

    public defaultAction;
    public defaultSelector;
    public getAssignedIstAction;
    public getAssignedSoaAction;
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
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                this.dispoManagerInstance = this.dispoService.initialized({mantisRecord: data})
                this.defaultAction = this.dispoManagerInstance.storeManagerIns.checkTableStoreAction;
                this.defaultSelector = this.dispoManagerInstance.storeManagerIns.checkTableStoreSelector;
                this.getAssignedIstAction = this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedIstAction;
                this.getAssignedSoaAction = this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedSoaAction;
                this.assignedIstSelector = this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedIstSelector;
                this.assignedSoaSelector = this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedSoaSelector;
                this.mainTabs = this.dispoManagerInstance.checkTableInstance.mainTabs;
                this.dispoManagerInstance.checkComponentInstance = this;
                this.initializeTab(); // need to know other tabs data
            }
        )

        this.activatedRoute.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');
            this.store.dispatch(orcModuleStore.getMantisObjectAction({id: this.mantisId}));
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
    }        


    getCheckStatCount(){
        this.countSubscription = this.store.pipe(select(this.dispoManagerInstance.storeManagerIns.checkCheckStatCountSelector)).subscribe(
            (data) => {        
                this.checkStat = data.count;
                this.subTab = {
                    ...data.subtab
                }
            }
        )
    }      

    initializeTab(){
        for (let key in this.mainTabs){
            let queryParams = this.mainTabs[key].id
            this.subTab[queryParams] = ['All'];
            // ignore current tab because it will be load in separate function
            // if(queryParams != this.queryParams){
            //    this.loadCheck(queryParams)
            // }
        }        
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
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().iSTCheckButtons;         

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedAction(this.checkFilter));
            this.rowData$ = this.store.pipe(select(this.assignedIstSelector));
            this.rowCurrentDataObj[queryParams] = this.rowData$;

        }else if(queryParams === ENUMS.TAB3.id){
            this.checkFilter['status'] = ENUMS.TAB3.status;
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs('assinged_soa');
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().sOACheckButtons;         

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedSoaAction(this.checkFilter));                          
            this.rowData$ = this.store.pipe(select(this.assignedSoaSelector))
            this.rowCurrentDataObj[queryParams] = this.rowData$;

        }else if(queryParams === ENUMS.TAB4.id){
            this.checkFilter['status'] = ENUMS.TAB4.status;
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().fSTCheckButtons;         

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAssignedAction(this.checkFilter));
            this.rowData$ = this.store.pipe(select(this.assignedIstSelector))
            this.rowCurrentDataObj[queryParams] = this.rowData$;
            
        }else{
            // this.checkFilter['status'] = ENUMS.TAB1.status;
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs(ENUMS.TAB1.id);
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         

            this.store.dispatch(this.dispoManagerInstance.storeManagerIns.checkTableStoreAction(this.checkFilter));
            this.rowData$ = this.store.pipe(select(this.defaultSelector))
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
