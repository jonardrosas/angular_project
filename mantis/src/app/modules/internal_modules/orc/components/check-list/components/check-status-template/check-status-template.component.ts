import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp  } from './../../../../../../third_party_modules/ag-grid';

@Component({
  selector: 'app-check-status-template',
  templateUrl: './check-status-template.component.html',
  styleUrls: ['./check-status-template.component.css']
})
export class CheckStatusTemplateComponent implements OnInit, ICellRendererAngularComp {
	public params: any;
	readonly defaultMap = {
		btnClass: 'btn-light'
	}
	readonly statusMapping  = {
		'N': {btnClass: 'btn-danger'},
		'A': {btnClass: 'btn-info'},
		'OC': {btnClass: 'btn-warning'},
		'SOA': {btnClass: 'btn-warning'},
		'fST': {btnClass: 'btn-success'},
		'SD': {btnClass: 'btn-info'},
		'RI': {btnClass: 'btn-info'},
		'ER': {btnClass: 'btn-info'},
		'OP': {btnClass: 'btn-info'},
		'MP': {btnClass: 'btn-info'},
		'PCF': {btnClass: 'btn-success'},
		'PW': {btnClass: 'btn-success'},
		'PT': {btnClass: 'btn-success'},
		'PC': {btnClass: 'btn-success'},
		'PP': {btnClass: 'btn-success'},
		'PNR': {btnClass: 'btn-success'},
		'PI': {btnClass: 'btn-success'},
		'FD': {btnClass: 'btn-warning'},
		'FR': {btnClass: 'btn-warning'},
		'FS': {btnClass: 'btn-warning'},
	}

    agInit(params: any): void {
		this.params = params;
    }

    constructor() { }

    ngOnInit() {
    }

    refresh(): boolean {
        return false;
	}
	
	getBtnClass(stat){
		if(stat in this.statusMapping){
			return this.statusMapping[stat]
		}
		return 
	}
}
