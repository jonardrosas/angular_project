import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {
    @Input() public columnDefs;
    @Input() public rowData;
    @Input() public options;
    @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular;

    constructor() { }

    ngOnInit() {
    }

    changeStatus() {
        const selectedNodes = this.agGrid.api.getSelectedNodes();
        const selectedData = selectedNodes.map( node => node.data );
    }

}
