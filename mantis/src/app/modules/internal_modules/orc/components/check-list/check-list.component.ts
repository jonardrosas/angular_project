import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { APP_CONFIG } from './../../../../../configs';
import { CheckTableModel } from './../check-list/models/table.model';
import { OrcCheckService } from './../../services/orccheck.service';


@Component({
    selector: 'app-check-list',
    templateUrl: './check-list.component.html',
    styleUrls: ['./check-list.component.css']
})


export class CheckListComponent implements OnInit {
    private tableInstance;
    public rowData;
    public columnDefs;

    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    private options = {
        theme: `ag-theme-balham`
    };

    constructor(private checkService: OrcCheckService) {
    }

    ngOnInit() { }

    @Input() set orcRecord(orcRecord) {
        if (orcRecord) {
            this.tableInstance = new CheckTableModel(orcRecord);
            this.columnDefs = this.tableInstance.columnDefs;
            this.getChecks(orcRecord.id);
        }
    }

    getChecks(id) {
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
