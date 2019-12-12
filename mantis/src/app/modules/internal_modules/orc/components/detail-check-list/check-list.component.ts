import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterContentInit
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { MantisDispositionManager } from './../../scripts';
import * as orcModuleStore from './../../store';
import { MantisRecordModel, OrcCheckAsessment, OrcCheckInterface } from './../../models';
import { ButtonCollapse } from './../../util/';
import * as ENUMS from './../../../orc/scripts/';
import { CheckStatusTemplateComponent } from './../../components/detail-check-list/components/check-status-template/check-status-template.component';
import { DispoMangerService } from './../../services';
import { Observable } from 'rxjs';
import { query } from '@angular/animations';

@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})

export class CheckListComponent extends ButtonCollapse implements OnInit, AfterViewInit {
    @Input() public mantisId: number;
    public rowData$:  Observable<OrcCheckInterface[] | OrcCheckAsessment[]>;
    public columnDefs: any;
    public dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    public assessmentModel = new OrcCheckAsessment();
    public frameworkComponents = {
        checkStatusTemplateComponent: CheckStatusTemplateComponent
    }
    public url: string = '/orc/view';
    public queryParams: string;
    public queryGroupTab: string;
    public mainTabs = [
        { id: ENUMS.TAB1.id, title: 'All Checks', url: this.url, param: 'default', count: 0},
        { id: ENUMS.TAB2.id, title: 'Assigned iST', url: this.url, param: 'assinged_ist', count: 0},
        { id: ENUMS.TAB3.id, title: 'Assigned SOA', url: this.url, param: 'assinged_soa', count: 0},
    ];
    public buttons;
    public object$: Observable<OrcCheckAsessment>;
    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        theme: `detail-check ag-theme-balham`
    };
    public tabCount = {};
    public tabGroupCount = {};
    public filters = {};
    public checkAction;
    public checkSelector;

    public defaultAction;
    public defaultSelector;
    public getAssignedIstAction;
    public getAssignedSoaAction;
    public assignedIstSelector;
    public assignedSoaSelector;
    public previousSelectedRow = [];
    public isShowAssignedGroup: boolean = false;
    public seciontAssignedGroup: any = {};
    public checkFilter: {limit?: number; record?: number} = {};

    constructor(
        private store: Store<any>,
        private modalService: NgbModal,
        private activateRoute: ActivatedRoute,
        private dispoService: DispoMangerService,
    ) {
        super()
    }

    ngOnInit() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                this.dispoManagerInstance = this.dispoService.initialized({mantisRecord: data})
                this.defaultAction = this.dispoManagerInstance.dispositionInstance.checkTableStoreAction;
                this.defaultSelector = this.dispoManagerInstance.dispositionInstance.checkTableStoreSelector;
                this.getAssignedIstAction = this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedIstAction;
                this.getAssignedSoaAction = this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedSoaAction;
                this.assignedIstSelector = this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedIstSelector;
                this.assignedSoaSelector = this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedSoaSelector;
                this.dispoManagerInstance.checkComponentInstance = this;

            }
        )

        this.activateRoute.queryParams.subscribe(
            (data) => {
                this.filters = {};
                this.filters['limit'] = 1000;
                this.filters['record'] = this.mantisRecord.orc_record.id;
                this.queryParams = data.check_section;
                this.queryGroupTab = data.group;
                this.initializeTab() // need to know other tabs data
                this.loadCheck(this.queryParams);  // current tab data
            }
        ) 


    }

    initializeTab(){
        for (let key in this.mainTabs){
            let queryParams = this.mainTabs[key].id
            this.seciontAssignedGroup[queryParams] = ['All'];
            // ignore current tab because it will be load in separate function
            if(queryParams != this.queryParams){
                this.getMainTablCount(queryParams)
                this.loadCheck(queryParams)
            }
        }        
    }

    loadCheck(queryParams?){
        this.checkFilter['record'] = this.mantisRecord.orc_record.id;
        if(!queryParams){
            queryParams = this.queryParams;
        }

        if(this.queryGroupTab){
            this.checkFilter['group'] = this.queryGroupTab;
        }else{
            this.checkFilter['group'] = 'All';
        }

        this.store.dispatch(this.dispoManagerInstance.dispositionInstance.checkTableStoreAction(this.checkFilter));
        this.store.dispatch(this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedIstAction(this.checkFilter));
        this.store.dispatch(this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedSoaAction(this.checkFilter));                          

        if(queryParams === ENUMS.TAB2.id){
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().iSTCheckButtons;         
            this.rowData$ = this.store.pipe(select(this.assignedIstSelector))
            this.isShowAssignedGroup = true;
        }else if(queryParams === ENUMS.TAB3.id){
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs('assinged_soa');
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().sOACheckButtons;         
            this.rowData$ = this.store.pipe(select(this.assignedSoaSelector))
            this.isShowAssignedGroup = true;
        }else if(queryParams === ENUMS.TAB1.id){
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs(ENUMS.TAB1.id);
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         
            this.rowData$ = this.store.pipe(select(this.defaultSelector))
            this.isShowAssignedGroup = true;
            for(let key in ENUMS.QUERY_FIELD){
                this.getAssignedGroup(this.rowData$, key)
            }
        }else{
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs(ENUMS.TAB1.id);
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         
            this.rowData$ = this.store.pipe(select(this.defaultSelector))
            this.isShowAssignedGroup = true;
            for(let key in ENUMS.QUERY_FIELD){
                this.getAssignedGroup(this.rowData$, key)
            }            
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

    getAssignedGroup(rowData$, queryParams){
        rowData$.subscribe(
            (data) => {
                if(data.length > 0){
                    let field = ENUMS.QUERY_FIELD[queryParams]
                    for( let key in data){
                        let dat = data[key];
                        for(let key2 in dat[field]){
                            let review = dat[field][key2]
                            if(review.assigned_group){
                                if(this.seciontAssignedGroup[queryParams].indexOf(review.assigned_group.name) == -1){
                                    this.seciontAssignedGroup[queryParams].push(review.assigned_group.name)
                                }                                
                            }
                        }
                    }
                }
            }
        )
    }


    getOpenCount(data, status){
        let count = 0
        for(let k in data){
            let row = data[k];
            if(status.indexOf(row.status) != -1){
                count += 1;
            }
        }
        return count;
    }

    getMainTablCount(id){
        let count$;
        this.tabCount[id] = {};
        let openStatList: any;
        if(id == ENUMS.TAB2.id){
            count$ = this.store.pipe(select(this.assignedIstSelector));
            openStatList = ENUMS.TAB2.status;
        }else if(id == ENUMS.TAB3.id){
            count$ = this.store.pipe(select(this.assignedSoaSelector));
            openStatList = ENUMS.TAB3.status;
        }else if(id == ENUMS.TAB1.id){
            count$ = this.store.pipe(select(this.defaultSelector));
            openStatList = ENUMS.TAB1.status;
        }
        count$.subscribe(
            (data) => {
                if(data){
                    if(this.queryGroupTab){
                        this.tabCount[id][this.queryGroupTab] = this.getOpenCount(data, openStatList)
                    }else{
                        this.tabCount[id][ENUMS.ALL] = this.getOpenCount(data, openStatList)
                    }
                }
            }
        )
    }

    autoSelectCheck(){
        setTimeout(
            () => {
                this.agGrid.api.forEachNode(
                    (node) => {
                        if(this.previousSelectedRow.indexOf(node.data.id) > -1){
                            node.setSelected(true)
                            console.log("Node >>>>> ", node.data.id)
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
