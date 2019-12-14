import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp  } from './../../../../../../third_party_modules/ag-grid';
import { NgbModal } from './../../../../../../third_party_modules/ng_bootstrap';
import { checkStatusMapping } from './../../../../scripts/common/status';
import { CheckDetailPopupComponent } from './../../components/check-detail-popup/check-detail-popup.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-check-status-template',
  templateUrl: './check-status-template.component.html',
  styleUrls: ['./check-status-template.component.css']
})
export class CheckStatusTemplateComponent implements OnInit, ICellRendererAngularComp {
	public params: any;
    public btnClass;
    public mantisId;
	readonly statusMapping: any = checkStatusMapping;

    agInit(params: any): void {
        this.params = params;
        if(this.params.value){
            this.btnClass =  this.statusMapping[this.params.value] ? this.statusMapping[this.params.value].btnClass : '';
        }
    }

    constructor(
        private modalService: NgbModal,
        private activatedRoute: ActivatedRoute,
    ) { }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(params => {
            this.mantisId = +params.get('id');    
            debugger;
        })        
    }

    refresh(): boolean {
        return false;
    }
    
    showCheckDetail(){
        const modalRef = this.modalService.open(CheckDetailPopupComponent, {size: 'xl'})
        modalRef.componentInstance.data = this.params.data;
        modalRef.componentInstance.checkId = this.params.data.id;
        modalRef.componentInstance.mantisId = this.mantisId;
    }
	
}
