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
import { ButtonCollapse } from '../../scripts/common/add-jobreport-section';
import { CheckStatusTemplateComponent } from './../../components/check-list/components/check-status-template/check-status-template.component';
import { getDistinctFieldAction } from '../../store/actions/orcrecord.actions';


@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})


export class CheckListComponent extends ButtonCollapse implements OnInit, AfterViewInit {
    @Input() public mantisId: number;
    public rowData: any = [];
    public columnDefs: any;
    @Input() dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    private frameworkComponents = {
        checkStatusTemplateComponent: CheckStatusTemplateComponent
    }
    public mainTabs = [
        { title: 'All Checks', url: '/orc/view'},
        { title: 'Assigned iST', url: '/orc/view?teset=2'},
        { title: 'Assigned SOA', url: '/orc/view2?test=3'},
    ];
    public tabs: {
        title;
        url;
        param;
    }[] = [];
    public buttons;

    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        theme: `detail-check ag-theme-balham`
    };
    public filters = {};
    
    public gridOptions = {
        rowData: this.rowData,
        columnDefs: this.columnDefs,
        suppressRowClickSelection: 'true',
        suppressAutoSize: 'true',
        frameworkComponents: 'frameworkComponents',
        defaultColDef: '{resizable: true}',
        pagination: true,
        floatingFilter: true,
    }
    public distinctField = 'checkassessments__assigned_group__name';

    constructor(
        private store: Store<any>,
        private modalService: NgbModal,
        private activateRoute: ActivatedRoute,
        private router: Router,
    ) {
        super()
    }

    ngOnInit() {
        this.mantisRecord = this.dispoManagerInstance.dispoParams.mantisRecord;
        this.store.dispatch(orcModuleStore.getDistinctFieldAction({record: this.dispoManagerInstance.dispoParams.mantisRecord.orc_record.id, 'fields': this.distinctField}))
        this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
        this.buttons = this.dispoManagerInstance.getCheckActionButtons();         
        this.activateRoute.queryParams.subscribe(
            (data) => {
                this.filters[this.distinctField] = this.activateRoute.snapshot.queryParams['assigned_to'] || null;
                if(this.dispoManagerInstance.dispoParams.mantisRecord.orc_record.id){
                    this.filters['record'] =  this.mantisRecord.orc_record.id;
                    this.filters['limit'] = 1000                    
                    this.getChecks(this.filters);
                    if(this.agGrid){
                        this.getDistinctValue()
                    }
                }
            }
        )        
    }

    ngAfterViewInit() {
        this.agGrid.api.sizeColumnsToFit();
        this.agGrid.api.setDomLayout('autoHeight');
    }

    getDistinctValue(){
        if(this.mantisRecord.orc_record.status == 'SOA'){
            this.tabs = [];
            this.store.pipe(select(orcModuleStore.getDistinctFieldsFnSelector)).subscribe(
                (data) => {
                    for (const key in data){
                        const value = data[key];
                        if(value[this.distinctField]){
                            this.tabs.push(
                                {title: value[this.distinctField], url: '/orc/view', param: value[this.distinctField]}
                            )
                        }                    
                    }                    
                }
            )
        }
    }

    getChecks(filters) {
        this.store.dispatch(orcModuleStore.getOrcChecksAction(filters));
        this.store.pipe(select(orcModuleStore.getOrcRecordCheckStateSelector)).subscribe(
            (data) => {
                if (data.length > 0) {
                    this.rowData = data;
                }
                if(this.agGrid){
                    this.agGrid.api.sizeColumnsToFit();
                    this.agGrid.api.setDomLayout('autoHeight');
                    setTimeout(
                        ()=>this.getDistinctValue(), 1000
                    )
                }
            },
            (err) => {
                const modalRef = this.modalService.open(BootstrapAlertComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.data = {type: 'danger', message: err, title: 'Warning'};                
            }
        );
    }


}
