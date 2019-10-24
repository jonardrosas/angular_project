import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterContentInit
} from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';

import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { MantisDispositionManager } from './../../scripts';
import { BootstrapAlertComponent } from './../../../../../shared';
import * as orcModuleStore from './../../store';
import { MantisRecordModel } from './../../models';
import { ButtonCollapse } from './../../util/';
import { CheckStatusTemplateComponent } from './../../components/check-list/components/check-status-template/check-status-template.component';
import { DispoMangerService } from './../../services';


@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})


export class CheckListComponent extends ButtonCollapse implements OnInit, AfterViewInit {
    @Input() public mantisId: number;
    public rowData: any = [];
    public columnDefs: any;
    public dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    public frameworkComponents = {
        checkStatusTemplateComponent: CheckStatusTemplateComponent
    }
    public mainTabs = [
        { id: 1, title: 'All Checks', url: '/orc/view', param: 'default', count: 0},
        { id: 2, title: 'Assigned iST', url: '/orc/view', param: 'assinged_ist', count: 0},
        { id: 3, title: 'Assigned SOA', url: '/orc/view', param: 'assinged_soa', count: 0},
    ];
    public buttons;
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

                this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
                this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;                 
            }
        )

        this.activateRoute.queryParams.subscribe(
            (data) => {
                this.filters = {};
                this.filters['limit'] = 1000;
                this.filters['record'] = this.mantisRecord.orc_record.id;
                if(data.check_section == 'assinged_ist'){
                    this.getChecks(this.assignedIstSelector);
                    this.buttons = this.dispoManagerInstance.getCheckActionButtons().iSTCheckButtons;         
                }else if(data.check_section == 'assinged_soa'){
                    this.getChecks(this.assignedSoaSelector);
                    this.buttons = this.dispoManagerInstance.getCheckActionButtons().sOACheckButtons;         
                }else if(data.check_section == 'default'){
                    this.getChecks(this.defaultSelector);
                    this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         
                }else{
                    this.getChecks(this.defaultSelector);
                    this.buttons = this.dispoManagerInstance.getCheckActionButtons().allCheckButtons;         
                }
            }
        )        
    }

    ngAfterViewInit() {
        this.agGrid.api.sizeColumnsToFit();
        this.agGrid.api.setDomLayout('autoHeight');
    }

    getCount(id){
        let count$;
        if(id == 2){
            count$ = this.store.pipe(select(this.assignedIstSelector));
        }else if(id == 3){
            count$ = this.store.pipe(select(this.assignedSoaSelector));
        }else if(id == 1){
            count$ = this.store.pipe(select(this.defaultSelector));
        }
        return count$
    }

    getChecks(selector) {
        this.store.pipe(select(selector)).subscribe(
            (data) => {
                this.rowData = data;
                if(this.agGrid){
                    this.agGrid.api.sizeColumnsToFit();
                    this.agGrid.api.setDomLayout('autoHeight');
                }
            },
            (err) => {
                const modalRef = this.modalService.open(BootstrapAlertComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.data = {type: 'danger', message: err, title: 'Warning'};                
            }
        );
    }


}
