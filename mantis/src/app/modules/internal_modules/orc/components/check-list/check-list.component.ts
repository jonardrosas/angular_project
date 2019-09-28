import { Component, OnInit, Input, ViewChild, AfterViewInit, AfterContentInit
} from '@angular/core';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { APP_CONFIG } from './../../../../../configs';
import { CheckTableModel } from './../check-list/models/table.model';
import { OrcCheckService, MantisRecordService } from './../../services/';
import { MantisRecordModel } from './../../models';


@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})


export class CheckListComponent implements OnInit, AfterViewInit {
    private tableInstance: any;
    public rowData: any;
    public columnDefs: any;
    mantisRecord: any;

    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    public options = {
        // theme: `detail-check ag-theme-material`
        // theme: `detail-check ag-theme-bootstrap`
        theme: `detail-check ag-theme-balham`
    };

    constructor(
        private checkService: OrcCheckService,
        private mantisRecordService: MantisRecordService
    ) {
    }

    ngOnInit() {
        this.getObject();
    }

    ngAfterViewInit() {
        this.agGrid.api.sizeColumnsToFit();
    }

    errorResponse(err) {
        alert('Internal Error');
    }

    getObject() {
        this.mantisRecordService.mantisRecordSubject.subscribe(
            (data) => {
                this.tableInstance = new CheckTableModel(data);
                this.columnDefs = this.tableInstance.columnDefs;
                this.getChecks(data.orc_record_id);
            },
            (err) => {
                this.errorResponse(err);
            },
        );
    }

    getChecks(id: number) {
        this.checkService.getQuerySet({ record_id: id }).subscribe(
            (data) => {
                this.rowData = data.objects;
            },
            (err) => {
                alert('Internal Error');
            }
        );
    }


    changeStatus() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map(node => node.data);
    }

}
