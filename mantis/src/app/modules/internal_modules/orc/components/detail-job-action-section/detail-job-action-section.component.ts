import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbModal } from './../../../../third_party_modules/ng_bootstrap';
import { AgGridAngular } from './../../../../third_party_modules/ag-grid';
import { MantisRecordModel } from './../../models';
import { MantisDispositionManager } from './../../scripts';
import { ActivatedRoute, Router } from '@angular/router';
import { DispoMangerService } from './../../services';
import { NgbActiveModal } from '../../../../third_party_modules/ng_bootstrap';

@Component({
  selector: 'app-detail-job-action-section',
  templateUrl: './detail-job-action-section.component.html',
  styleUrls: ['./detail-job-action-section.component.css']
})
export class DetailJobActionSectionComponent implements OnInit {
    @Input() dispoManagerInstance: MantisDispositionManager;
    public buttons;
    public mantisRecord;
    @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
    
    constructor(
        private modalService: NgbModal,
        private store: Store<any>,
        activateRoute: ActivatedRoute,
        private dispoService: DispoMangerService,
    ) { }

    ngOnInit() {
        this.getObject();
        this.buttons = this.dispoManagerInstance.getDetailJobActionSection();
        console.log(this.buttons);
    }
    
    getObject() {
        this.mantisRecord = {
            ...this.dispoManagerInstance.dispoParams.mantisRecord,
        }        
    }
}
