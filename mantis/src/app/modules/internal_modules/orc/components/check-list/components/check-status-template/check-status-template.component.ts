import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp  } from './../../../../../../third_party_modules/ag-grid';
import { checkStatusMapping } from './../../../../scripts/common/status';

@Component({
  selector: 'app-check-status-template',
  templateUrl: './check-status-template.component.html',
  styleUrls: ['./check-status-template.component.css']
})
export class CheckStatusTemplateComponent implements OnInit, ICellRendererAngularComp {
	public params: any;
	public btnClass;
	readonly statusMapping: any = checkStatusMapping;

    agInit(params: any): void {
		this.params = params;
		this.btnClass =  this.statusMapping[this.params.value].btnClass;
    }

    constructor() { }

    ngOnInit() {
    }

    refresh(): boolean {
        return false;
	}
	
}
