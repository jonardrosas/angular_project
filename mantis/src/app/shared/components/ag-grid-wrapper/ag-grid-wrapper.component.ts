import { Component, OnInit, ViewChild, Output, Input, EventEmitter  } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-grid-wrapper',
  templateUrl: './ag-grid-wrapper.component.html',
  styleUrls: ['./ag-grid-wrapper.component.css']
})


export class AgGridWrapperComponent implements OnInit {
    @Input() rowData;
    @Input() columnDefs;
    
    constructor() { }

    ngOnInit() {
    }

}
