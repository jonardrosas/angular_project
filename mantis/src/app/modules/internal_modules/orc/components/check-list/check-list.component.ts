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
import { CheckStatusTemplateComponent } from './../../components/check-list/components/check-status-template/check-status-template.component';
import { DispoMangerService } from './../../services';
import { Observable } from 'rxjs';

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
    public mainTabs = [
        { id: ENUMS.TAB1, title: 'All Checks', url: this.url, param: 'default', count: 0},
        { id: ENUMS.TAB2, title: 'Assigned iST', url: this.url, param: 'assinged_ist', count: 0},
        { id: ENUMS.TAB3, title: 'Assigned SOA', url: this.url, param: 'assinged_soa', count: 0},
    ];
    public buttons;
    public object$: Observable<OrcCheckAsessment>;
    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        theme: `detail-check ag-theme-balham`
    };
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
                this.loadCheck()
            }
        )        

    }

    loadCheck(){
        this.checkFilter['record'] = this.mantisRecord.orc_record.id;
        this.store.dispatch(this.dispoManagerInstance.dispositionInstance.checkTableStoreAction(this.checkFilter));
        this.store.dispatch(this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedIstAction(this.checkFilter));
        this.store.dispatch(this.dispoManagerInstance.dispositionInstance.checkTableStoreAssignedSoaAction(this.checkFilter));                          

        if(this.queryParams == ENUMS.TAB2){
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().iSTCheckButtons;         
            this.rowData$ = this.store.pipe(select(this.assignedIstSelector))
        }else if(this.queryParams == ENUMS.TAB3){
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs('assinged_soa');
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().sOACheckButtons;         
            this.rowData$ = this.assessmentModel.objects.filter({check__record: this.mantisRecord.orc_record.id})
        }else if(this.queryParams == ENUMS.TAB1){
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs(ENUMS.TAB1);
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         
            this.rowData$ = this.store.pipe(select(this.defaultSelector))
        }else{
            this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs(ENUMS.TAB1);
            this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         
            this.rowData$ = this.store.pipe(select(this.defaultSelector))
        }        
        this.refreshGrid()
    }       

    ngAfterViewInit() {
        this.agGrid.api.sizeColumnsToFit();
        this.agGrid.api.setDomLayout('autoHeight');
    }

    getCount(id){
        let count$;
        if(id == ENUMS.TAB2){
            count$ = this.store.pipe(select(this.assignedIstSelector));
        }else if(id == ENUMS.TAB3){
            count$ = this.store.pipe(select(this.assignedSoaSelector));
        }else if(id == ENUMS.TAB1){
            count$ = this.store.pipe(select(this.defaultSelector));
        }
        return count$
    }

    autoSelectCheck(){
        setTimeout(
            () => {
                this.agGrid.api.forEachNode(
                    (node) => {
                        if(this.previousSelectedRow.indexOf(node.data.id) > -1){
                            debugger;
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
