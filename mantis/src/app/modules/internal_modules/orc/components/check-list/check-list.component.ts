import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterContentInit
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';

import { MantisDispositionManager } from './../../scripts';
import { BootstrapAlertComponent } from './../../../../../shared';
import * as orcModuleStore from './../../store';
import { MantisRecordModel } from './../../models';
import { ButtonCollapse } from '../../scripts/common/add-jobreport-section';
import { CheckStatusTemplateComponent } from './../../components/check-list/components/check-status-template/check-status-template.component';


@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})


export class CheckListComponent extends ButtonCollapse implements OnInit, AfterViewInit {
    @Input() public mantisId: number;
    public rowData: any;
    public columnDefs: any;
    @Input() dispoManagerInstance: MantisDispositionManager;
    public mantisRecord: MantisRecordModel;
    public frameworkComponents = {
        checkStatusTemplateComponent: CheckStatusTemplateComponent
    }

    public buttons;

    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        theme: `detail-check ag-theme-balham`
    };

    constructor(
        private store: Store<any>,
        private modalService: NgbModal
    ) {
        super()
    }

    ngOnInit() {
        this.loadTable();
    }

    ngAfterViewInit() {
        this.agGrid.api.sizeColumnsToFit();
    }

    loadTable() {
        this.store.pipe(select(orcModuleStore.getMantisRecordObjectStateSelector)).subscribe(
            (data) => {
                this.mantisRecord = data;
                if (data.orc_record.id) {
                    this.columnDefs = this.dispoManagerInstance.getCheckTableColDefs();
                    this.buttons = this.dispoManagerInstance.getCheckActionButtons(); 
                    this.getChecks(data.orc_record.id);
                }
            }
        );
    }

    getChecks(id: number) {
        this.store.dispatch(orcModuleStore.getOrcChecksAction({record: id}));
        this.store.pipe(select(orcModuleStore.getOrcRecordCheckStateSelector)).subscribe(
            (data) => {
                if (data.length > 0) {
                    this.rowData = data;
                } else {
                    this.rowData = [];
                }
                if(this.agGrid){
                    this.agGrid.api.sizeColumnsToFit();
                }
            },
            (err) => {
                const modalRef = this.modalService.open(BootstrapAlertComponent, {backdrop: 'static', keyboard: false})
                modalRef.componentInstance.data = {type: 'danger', message: err, title: 'Warning'};                
            }
        );
    }

}
