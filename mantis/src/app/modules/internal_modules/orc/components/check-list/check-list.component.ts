import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterContentInit
} from '@angular/core';
import { Store, select } from '@ngrx/store';

import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';

import { OrcDetailMain } from './../../scripts/main';
import * as orcModuleStore from './../../store';
import * as checkComponentBase from './models/common/component-base-class';

import { CheckChangeStatusComponent } from './components/check-change-status/check-change-status.component';


@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})


export class CheckListComponent extends checkComponentBase.AlertClass implements OnInit, AfterViewInit {
    private checkTableInstance: any;
    @Input() public mantisId: number;
    public rowData: any;
    public columnDefs: any;
    public orcDetailMain: OrcDetailMain;

    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        // theme: `detail-check ag-theme-material`
        // theme: `detail-check ag-theme-bootstrap`
        theme: `detail-check ag-theme-balham`
    };

    constructor(
        private store: Store<any>,
        private modalService: NgbModal
    ) {
        super();
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
                this.orcDetailMain = new OrcDetailMain(data);
                this.checkTableInstance = this.orcDetailMain.getChecksTable();
                this.columnDefs = this.checkTableInstance.columnDefs;
                if (data.orc_record_id) {
                    this.getChecks(data.orc_record_id);
                }
            }
        );
    }

    getChecks(id: number) {
        this.store.dispatch(orcModuleStore.getOrcChecksAction({record_id: id}));
        this.store.pipe(select(orcModuleStore.getOrcRecordCheckStateSelector)).subscribe(
            (data) => {
                this.clearAlert();
                if (data.length > 0) {
                    this.rowData = data;
                } else {
                    this.rowData = [];
                    this.setAlert('No Check Available');
                }
                this.agGrid.api.sizeColumnsToFit();
            },
            (err) => {
                this.setAlert(err);
            }
        );
    }

    getSelectedRows() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        return selectedNodes.map(node => node.data);
    }

    changeStatus() {
        const selectedData = this.getSelectedRows();
        const modalRef = this.modalService.open(CheckChangeStatusComponent);
        modalRef.componentInstance.selectedData = selectedData;
    }

}
